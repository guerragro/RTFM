// import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { ComponentHandlers, ResponseHandle } from '../../../../../helpers/handlers';
// import { ReplenishmentTask, ReplenishmentWare } from '../../../models/replenishment.models';
// import { Observable, Subscription } from 'rxjs';
// import { CalculatorForPieceComponent } from '../../../../shared/components/calculator/modal/for-piece/calculator.component';
// import { CalculatorForBoxComponent } from '../../../../shared/components/calculator/modal/for-box/calculator.component';
// import { CalculatorForWeightComponent } from '../../../../shared/components/calculator/modal/for-weight/calculator.component';
// import { CalculatorForBoxWeightComponent } from '../../../../shared/components/calculator/modal/for-box-weight/calculator.component';
// import { ReplenishmentService } from '../../../services/replenishment.service';
// import { ReplenishmentPalletComponent } from '../replenishment-pallet.component';
// import { MatBottomSheet, MatBottomSheetRef, MatDialog, MatSnackBar } from '@angular/material';
// import { ReplenishmentTaskStore } from '../../../stores/replenishment-task.test-store';
// import { BarcodeService } from '../../../../shared/services/barcode.service';
// import { fromMobx } from '../../../../../helpers/from-mobx';
// import { NewBarcodeTypes } from '../../../../../models/barcode-types.model';
// import { Message, ReplenishmentAction } from '../../../models/enums';
// import { ReplenishmentReplenishAllComponent } from '../../modals/replenishment-replenish-all/replenishment-replenish-all.component';
// import { ReplenishmentOldestPalletComponent } from '../../modals/replenishment-oldest-pallet/replenishment-oldest-pallet.component';
// import { ReplenishmentWareConfirmComponent } from '../../modals/replenishment-ware-confirm/replenishment-ware-confirm.component';
//
// @ComponentHandlers()
// @Component({
//   selector: 'app-replenishment-from-cart',
//   templateUrl: './replenishment-from-cart.component.html',
//   styleUrls: ['./replenishment-from-cart.component.css']
// })
// export class ReplenishmentFromCartComponent implements OnInit, OnDestroy {
//
//   handleMessage: MessageHandler;
//
//   scannedSite: Object;
//   scannedWare: Object;
//   scannedPallet: Object;
//   calcAmount: number;
//   replenishmentAction: 'replenish'|'moveToPallet'|'checkOldestWare';
//   task: ReplenishmentTask;
//   task$: Observable<ReplenishmentTask>;
//   taskSubscription: Subscription;
//   wares: ReplenishmentWare[];
//   wares$: Observable<any>;
//   waresSubscription: Subscription;
//
//   // FIXME
//   @ViewChild(CalculatorForPieceComponent)
//   pieceCalc: CalculatorForPieceComponent;
//
//   @ViewChild(CalculatorForBoxComponent)
//   boxCalc: CalculatorForBoxComponent;
//
//   @ViewChild(CalculatorForWeightComponent)
//   weightCalc: (CalculatorForWeightComponent);
//
//   @ViewChild(CalculatorForBoxWeightComponent)
//   boxWeightCalc: (CalculatorForBoxWeightComponent);
//
//   constructor(
//     private localService: ReplenishmentService,
//     public parent: ReplenishmentPalletComponent,
//     private taskStore: ReplenishmentTaskStore,
//     private barcodeService: BarcodeService,
//     public snackBar: MatSnackBar,
//     public dialog: MatDialog,
//     public bottomSheet: MatBottomSheet,
//   ) {
//     this.task$ = fromMobx(() => taskStore.replenishmentTask);
//     this.wares$ = fromMobx(() => taskStore.replenishmentWares);
//   }
//
//   get rbs() {
//     return this.parent.rbs;
//   }
//
//   get showMessage() {
//     return this.parent.showMessage;
//   }
//   get dismiss() {
//     return this.parent.dismiss;
//   }
//
//   ngOnInit() {
//     this.taskSubscription = this.task$.subscribe(task => {
//       this.task = task;
//       this.setNulls('scannedWare');
//     });
//     this.waresSubscription = this.wares$.subscribe(wares => wares && (this.wares = wares));
//   }
//
//   ngOnDestroy() {
//     this.taskSubscription.unsubscribe();
//     this.waresSubscription.unsubscribe();
//   }
//
//   // TODO: FIXME
//   setNulls(keys: Array<string>|string = ['scannedSite', 'scannedWare', 'scannedPallet']): void {
//     let update = false;
//     if (keys instanceof Array) {
//       keys.forEach(key => update = this.nullify(key, update));
//     } else {
//       update = this.nullify(keys);
//     }
//     this.nullify('replenishmentAction');
//     if (update) {
//       this.handleView();
//     }
//   }
//
//   private nullify(key, update = false): boolean {
//     delete this[key];
//     if (key === 'scannedWare') {
//       delete this['calcAmount'];
//     }
//     return update || ['scannedSite', 'scannedWare'].some(k => k === key);
//   }
//
//   handleView(): void {
//     this.dismiss();
//     const ware = this.scannedWare;
//     const site = (this.scannedSite &&
//       (!ware ||
//         this.wares.filter(
//           w => w.sale.position === this.scannedSite['data']['sitename']
//         ).length)
//     ) ? this.scannedSite : null;
//     if (ware || site) {
//       this.taskStore.setFilter(
//         (taskWare: ReplenishmentWare) =>
//           taskWare.restCart &&
//           ((!ware || ware['data']['code'] === taskWare.code) &&
//             (!site || site['data']['sitename'] === taskWare.sale.position))
//       );
//     } else {
//       this.taskStore.setFilter((taskWare: ReplenishmentWare) => (taskWare.restCart > 0));
//     }
//   }
//
//   onScan(value) {
//     this.handleFind({value});
//   }
//
//   handleFind(event): void {
//     this.rbs.setDownloadScreen();
//     this.barcodeService.identifyBarcode(event['value']).subscribe(
//       (res: Object) => this.handleIdentifyBarcode(res),
//       err => this.handleMessage(err)
//     );
//   }
//
//   @ResponseHandle()
//   private handleIdentifyBarcode(ans: Object): void {
//     this.rbs.finalScreen();
//     switch (ans['barcodetype']) {
//       case NewBarcodeTypes.wares:
//         this.scannedWare = ans;
//         break;
//       case NewBarcodeTypes.pallet:
//         this.scannedPallet = ans;
//         delete this.scannedSite;
//         break;
//       case NewBarcodeTypes.site:
//         this.scannedSite = ans;
//         delete this.scannedPallet;
//         break;
//       default:
//         this.handleMessage(Message.WRONG_BARCODE);
//         break;
//     }
//     this.handleView();
//     this.handleScan(ans);
//   }
//
//   handleScan(scannedItem: Object): void {
//     if (this.wares.length) {
//       switch (scannedItem['barcodetype']) {
//         case NewBarcodeTypes.wares:
//           if (this.scannedPallet) {
//             this.replenishmentAction = 'moveToPallet';
//             this.invokeCalc();
//           } else {
//             // if in replenishment task
//             const taskWares: ReplenishmentWare[] = this.wares.filter(ware => ware.rest);
//             if (taskWares.length) {
//               // in task
//               this.replenishmentAction = 'replenish';
//               switch (taskWares.length) {
//                 case 0:
//                   // no position
//                   if (!this.scannedSite) {
//                     this.showMessage([Message.NO_ADDRESS, Message.NEED_POSITION]);
//                     this.invokeCalc(taskWares[0].restCart);
//                   } else {
//                     this.invokeCalc(taskWares[0].restCart);
//                   }
//                   break;
//                 case 1:
//                   this.showMessage(Message.HINT_POSITION
//                       .replace('{position}', taskWares[0].sale.position || 'Не определено')
//                       .replace('{rest}', taskWares[0].rest.toString())
//                       .replace('{restPallet}', taskWares[0].restCart.toString()),
//                     { duration: 0, verticalPosition: 'bottom' }
//                   );
//                   if (!taskWares[0].sale.positionBarcode) {
//                     this.replenishmentAction = null;
//                   }
//                   this.invokeCalc(taskWares[0].restCart);
//                   break;
//                 default:
//                   this.showMessage(taskWares.map(ware => Message.HINT_POSITION
//                       .replace('{position}', ware.sale.position)
//                       .replace('{rest}', ware.rest.toString())
//                       .replace('{restPallet}', ware.restCart.toString())),
//                     { duration: 0, verticalPosition: 'bottom' }
//                   );
//                   this.invokeCalc(taskWares[0].restCart);
//                   break;
//               }
//             } else {
//               // not in task
//               this.showMessage([Message.NO_TASK, Message.NEED_POSITION, Message.NEED_PALLET]);
//             }
//           }
//           break;
//         case NewBarcodeTypes.pallet:
//           if (this.scannedWare) {
//             this.replenishmentAction = 'moveToPallet';
//             if (this.calcAmount) {
//               this.handleCalcInput({
//                 value: this.calcAmount
//               });
//             } else {
//               this.invokeCalc();
//             }
//           }
//           break;
//         case NewBarcodeTypes.site:
//           if (this.scannedWare) {
//             this.replenishmentAction = 'replenish';
//             if (this.calcAmount) {
//               this.handleCalcInput();
//             } else {
//               this.checkOldestPallet();
//             }
//           }
//           break;
//         default:
//           break;
//       }
//     } else {
//       this.setNulls(['scannedWare', 'scannedSite']);
//       this.handleMessage(Message.NO_WARE_IN_CART);
//     }
//   }
//
//   private checkOldestPallet(): void {
//     this.rbs.setDownloadScreen();
//     this.localService.getOldestPallet(this.scannedWare['barcode']).subscribe(
//       (res: Object) => this.handleOldestPallet(res),
//       (err: any) => this.handleMessage(err)
//     );
//   }
//
//   private handleOldestPallet(ans: Object): void {
//     if (!ans['error']) {
//       this.rbs.finalScreen();
//       if (ans['pallets'].length > 0) {
//         const pallet = ans['pallets'].find((item) => {
//           return item['barcode'] === this.task.pallet;
//         });
//         if (pallet) {
//           this.invokeCalc();
//         } else {
//           const dialog = this.dialog.open(ReplenishmentOldestPalletComponent, {
//             data: {
//               pallets: ans['pallets'],
//               replenishAction: !!pallet,
//             }
//           });
//           dialog.afterClosed().subscribe(actions => {
//             if (actions === 'replenish') {
//               this.invokeCalc(this.wares.length ? (this.wares[0].rest || this.wares[0].restPallet) : 0);
//             } else if (actions === 'task') {
//               this.rbs.setDownloadScreen();
//               this.localService.createReplenishmentTask([this.scannedWare['barcode']]).subscribe(
//                 (res: Object) => this.handleCreateReplenishmentTask(res),
//                 (err: any) => this.handleMessage(err)
//               );
//             } else {
//               this.setNulls();
//             }
//           });
//         }
//       }
//     } else {
//       this.handleMessage(ans['mes']);
//       this.invokeCalc();
//     }
//   }
//
//   @ResponseHandle()
//   private handleCreateReplenishmentTask(ans: Object): void {
//     this.handleMessage('Задание создано', 'success');
//     this.taskStore.getTask();
//   }
//
//   private invokeCalc(rest_calc?, ware = this.scannedWare['data']): void {
//     const rest = rest_calc || this.wares[0].restCart;
//     if (ware['weightbarcode']) {
//       //  Весовые калькуляторы
//       if (ware['unit']['name'] === 'кг') {
//         //  Весовой Штучный
//         this.weightCalc.showWindow(ware['name'], rest, true)
//       } else {
//         //  Весовой коробочные
//         this.boxWeightCalc.showWindow(ware['name'], rest, true, ware['unit']['ratio'], ware['unit']['name'])
//       }
//     } else {
//       //  Не весовые калькуляторы
//       if (ware['unit']['name'] === 'шт') {
//         // Штучный
//         this.pieceCalc.showWindow(ware['name'], rest, true, ware['unit']['ratio'], ware['unit']['name'])
//       } else {
//         // Коробочный
//         this.boxCalc.showWindow(ware['name'], rest, true, ware['unit']['ratio'], ware['unit']['name'])
//       }
//     }
//   }
//
//   handleCalcInput(event = {value: this.calcAmount}): void {
//     if (!this.wares || this.wares[0].restCart < event['value']) {
//       this.setNulls();
//       this.handleMessage(Message.CALC_AMOUNT_WRONG);
//     } else {
//       this.calcAmount = event['value'];
//       switch (this.replenishmentAction) {
//         case 'replenish':
//           const ware: ReplenishmentWare = this.wares[0];
//           if (ware.restCart < this.calcAmount) {
//             this.showMessage(Message.CALC_AMOUNT_WRONG);
//           } else {
//             const site_code = this.scannedSite ? this.scannedSite['barcode'] : ware.sale.positionBarcode;
//             if (ware.rest > this.calcAmount) {
//               const dialog = this.dialog.open(ReplenishmentWareConfirmComponent, {
//                 data: {...this.wares[0], calcAmount: this.calcAmount},
//                 disableClose: true
//               });
//               dialog.afterClosed().subscribe((actions: ReplenishmentAction|null|false) => {
//                 if (actions !== false) {
//                   if (actions === ReplenishmentAction.empty_pallet) {
//                     console.log('create task inventory');
//                   }
//                   this.prepareReplenishment(actions, site_code);
//                 } else {
//                   this.setNulls();
//                 }
//               })
//             } else if (ware.rest < this.calcAmount) {
//               console.log('create realogram checking');
//               this.prepareReplenishment(ReplenishmentAction.replenish, site_code);
//             } else {
//               this.prepareReplenishment(ReplenishmentAction.replenish, site_code);
//             }
//           }
//           break;
//         case 'moveToPallet':
//           if (this.scannedPallet) {
//             this.moveWareToPallet(this.calcAmount);
//           }
//           break;
//       }
//     }
//   }
//
//   handleCalcCancel(): void {
//     this.dismiss();
//     this.setNulls();
//   }
//
//   prepareReplenishment(
//     actions: ReplenishmentAction|null,
//     site_code?: string
//   ): void {
//     const receiver = site_code || this.scannedSite['barcode'];
//     const wares: ReplenishmentWare[] = this.wares.filter(
//       ware =>
//         ware.sale.positionBarcode === receiver.toUpperCase()
//     );
//     const amount = this.calcAmount + (wares.length ? wares[0].replenish : 0);
//     const params: Object = {
//       waresBarcode: this.scannedWare['data']['code'],
//       waresCount: amount,
//       fromCart: this.calcAmount,
//       waresSource: this.task.pallet,
//       waresReceiver: receiver,
//       cart: false,
//       actions: actions,
//       replenishmentCount: this.calcAmount,
//     };
//     this.setNulls();
//     this.taskStore.makeReplenishment(params);
//   }
//
//   private moveWareToPallet(amount = null): void {
//     const params = {
//       barcode: this.task.pallet,
//       typeChanging: 'relocate',
//       replenishment: this.task.guid,
//       waresSet: [
//         {
//           customAmount: amount || this.wares[0].restCart,
//           WCODE: this.scannedWare['data']['code'],
//           selectedPallet: this.scannedPallet['data']['barcode']
//         }
//       ]
//     };
//     this.taskStore.moveWareToPallet(params);
//   }
//
//   replenishAll(): void {
//     const bottomSheet: MatBottomSheetRef = this.bottomSheet.open(ReplenishmentReplenishAllComponent, {
//       data: {
//         receiver: 'МП',
//         sitename: this.scannedSite['data']['sitename']
//       }
//     });
//     bottomSheet.afterDismissed().subscribe(answer => {
//       if (answer) {
//         const params: Array<Object> = [];
//         this.wares.forEach(ware => {
//           if (ware.sale.positionBarcode) {
//             params.push({
//               waresBarcode: ware.code,
//               waresCount: ware.restCart + ware.replenish,
//               fromCart: ware.restCart,
//               waresSource: this.task.pallet,
//               waresReceiver: ware.sale.positionBarcode,
//               cart: false,
//               actions: ReplenishmentAction.replenish,
//               replenishmentCount: ware.restCart,
//             });
//           }
//         });
//         if (params.length) {
//           this.taskStore.makeReplenishmentAll(params);
//         } else {
//           this.setNulls();
//         }
//       }
//     });
//   }
//
//   moveToPalletAll(): void {
//     const bottomSheet: MatBottomSheetRef = this.bottomSheet.open(ReplenishmentReplenishAllComponent, {
//       data: {
//         receiver: 'паллет',
//         sitename: this.scannedPallet['data']['barcode']
//       }
//     });
//     bottomSheet.afterDismissed().subscribe(answer => {
//       if (answer) {
//         const params = {
//           barcode: this.task.pallet,
//           typeChanging: 'relocate',
//           replenishment: this.task.guid,
//           waresSet: this.wares.map(ware => {
//             return {
//               customAmount: ware.restCart,
//               WCODE: ware.code,
//               selectedPallet: this.scannedPallet['data']['barcode']
//             }
//           })
//         };
//         this.setNulls('scannedWare');
//         this.taskStore.moveWareToPallet(params);
//       }
//     });
//   }
//
//   openWareActions(ware: ReplenishmentWare): void {}
//
// }
