// import { Injectable } from '@angular/core';
// import { action, observable, computed } from 'mobx';
// import { ReplenishmentTask } from '../models/replenishment.models';
// import { ReplenishmentService } from '../services/replenishment.service';
// import { ReplenishmentPalletService } from '../services/replenishment-pallet.service';
// import { TaskStatus } from '../../../models/task-status';
// import { Message } from '../models/enums';
// import { Observable, forkJoin } from 'rxjs';
// import { ActivatedRoute, Router } from '@angular/router';
//
// @Injectable()
// export class ReplenishmentTaskStore {
//   @observable taskLoading = false;
//   @observable task: ReplenishmentTask;
//   @observable taskError: {
//     message: string,
//     type: MessageType
//   };
//   @observable filter: (item, index, array) => boolean | null;
//
//   constructor(
//     private localService: ReplenishmentService,
//     private palletService: ReplenishmentPalletService,
//     private router: Router,
//     private route: ActivatedRoute,
//   ) { }
//
//   @action getTask(getStatus = false) {
//     this.taskLoading = true;
//     this.localService.getData(true).subscribe(
//       (res: Object) => {
//         this.taskLoading = false;
//         if (!res['error']) {
//           if (!res['rows'].length) {
//             this.router.navigate(['replenishment'], {relativeTo: this.route.root});
//           }
//           this.task = this.palletService.handleTaskData(res);
//           if (getStatus || !this.task.status) {
//             this.getTaskStatus();
//           }
//         } else {
//           this.handleResponse(res['mes']);
//         }
//       },
//       (err: any) => this.handleResponse(err)
//     );
//   }
//
//   @action getTaskStatus() {
//     if (this.task) {
//       this.taskLoading = true;
//       this.localService.getTask(this.task.taskGuid).subscribe(
//         (res: Object) => {
//           this.taskLoading = false;
//           if (!res['error']) {
//             this.task.status = res['status'];
//           } else {
//             this.handleResponse(res['mes']);
//           }
//         },
//         (err: any) => this.handleResponse(err)
//       );
//     }
//   }
//
//   @action setTaskStatus(status: TaskStatus, getData = false) {
//     if (this.task) {
//       this.taskLoading = true;
//       this.localService.setTaskStatus(this.task.taskGuid, {status: status}).subscribe(
//         (res: Object) => {
//           this.taskLoading = false;
//           if (!res['error']) {
//             this.task.status = res['status'];
//             if (getData) {
//               this.getTask();
//             }
//             if (status === 'DONE') {
//               this.router.navigate(['replenishment'], {relativeTo: this.route.root});
//             }
//           } else {
//             this.handleResponse(res['mes']);
//           }
//         }
//       )
//     }
//   }
//
//   @action setFilter(handler: (ware, index, array) => boolean | null = null) {
//     this.filter = handler;
//   }
//
//   @action makeReplenishment(params: Object) {
//     this.taskLoading = true;
//     this.localService.makeReplenishment(this.task.guid, params).subscribe(
//       (res: Object) => {
//         this.taskLoading = false;
//         if (!res['error']) {
//           this.getTask();
//         } else {
//           this.handleResponse(res['mes']);
//         }
//       },
//       err => this.handleResponse(err)
//     )
//   }
//
//   @action makeReplenishmentAll(params: Array<Object>) {
//     const replenishments: Observable<Object>[] = params.map(param =>
//       this.localService.makeReplenishment(this.task.guid, param)
//     );
//     this.taskLoading = true;
//     forkJoin(...replenishments).subscribe(
//       (res: Array<Object>) => {
//         const messages: Array<string> = [];
//         res.forEach(ans => {
//           if (ans['error']) {
//             messages.push(ans['mes']);
//           }
//         });
//         if (messages.length) {
//           this.handleResponse(messages.join(', '));
//         }
//         this.getTask();
//       }
//     )
//   }
//
//   @action replenishmentCart(params: Object) {
//     this.taskLoading = true;
//     this.localService.replenishmentCart(this.task.guid, params).subscribe(
//       (res: Object) => {
//         if (!res['error']) {
//           this.getTask();
//         } else {
//           this.handleResponse(res['mes']);
//         }
//       },
//       err => this.handleResponse(err)
//     );
//   }
//
//   @action moveWareToPallet(params: Object) {
//     this.taskLoading = true;
//     this.localService.palletChange(params).subscribe(
//       (res: any) => {
//         if (!res['error']) {
//           this.handleResponse(Message.MOVE_WARE_TO_PALLET_SUCCESS, 'success');
//           this.getTask();
//         } else {
//           this.handleResponse(res['mes']);
//         }
//       },
//       err => this.handleResponse(err)
//     );
//   }
//
//   @action moveWareToBox(params: Object) {
//     this.taskLoading = true;
//     this.localService.moveWareToBox(params).subscribe(
//       (res: any) => {
//         if (!res['error']) {
//           this.handleResponse(Message.MOVE_WARE_TO_BOX, 'success');
//           this.getTask();
//         } else {
//           this.handleResponse(res['mes'])
//         }
//       },
//       err => this.handleResponse(err)
//     )
//   }
//
//   @action moveWareToPalletAll(params: Array<Object>) {
//     this.taskLoading = true;
//     const moves: Observable<Object>[] = params.map(
//       param => this.localService.palletChange(param)
//     );
//     forkJoin(...moves).subscribe(
//       (res: Array<Object>) => {
//         const messages: Array<string> = [];
//         res.forEach(ans => {
//           if (ans['error']) {
//             messages.push(ans['mes']);
//           }
//         });
//         if (messages.length) {
//           this.handleResponse(messages.join(', '));
//         }
//         this.getTask();
//       },
//       err => this.handleResponse(err)
//     )
//   }
//
//   @computed get replenishmentTask() {
//     return this.task;
//   }
//
//   @computed get replenishmentWares() {
//     if (this.task) {
//       return this.filter ? this.task.wares.filter(this.filter) : this.task.wares;
//     }
//     return null;
//   }
//
//   @computed get taskStatus() {
//     return this.task && this.task.status;
//   }
//
//   @computed get loading() {
//     return this.taskLoading;
//   }
//
//   @computed get error() {
//     return this.taskError;
//   }
//
//   private handleResponse(errorMessage: string|null = null, type: MessageType = 'warn'): void {
//     if (errorMessage) {
//       this.taskError = {
//         message: errorMessage,
//         type: type
//       };
//     }
//     this.taskLoading = false;
//   }
//
// }
