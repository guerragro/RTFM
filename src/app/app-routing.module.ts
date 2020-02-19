import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/component/page-not-found/page-not-found.component';

// TODO почитать по routing
// https://favicon.tech/kak-sozdat-polnostranichnyj-veb-sajt-v-angular-chast-3-4/

export const appRoutes: Routes = [
  {
    path: 'тестовый модуль',
    loadChildren: './modules/test/test.module#TestModule'
  },
  {
    // Todo, сделано, но через жопу
    path: 'menu',
    loadChildren: './modules/menu/menu.module#MenuModule'
  },
  {
    path: 'Project',
    loadChildren: './modules/readme/readme.module#ReadMeModule'
  },
  {
    // Todo, по моим прикидкам готовность 70-80%
    path: 'todoList',
    loadChildren: './modules/todo/todo.module#TodoModule'
  },
  {
    // Todo, готово получение данных, добавлен некоторый функционал, сделать внешнее оформление
    path: 'weatherService',
    loadChildren: './modules/weather/weather.module#WeatherModule'
  },
  {
    // Todo, все на стадии зачатия, есть первые сподвижки
    path: 'ticketService',
    loadChildren: './modules/ticket/ticket.module#TicketModule'
  },
  {
    // Todo, привести в порядок и сделать игру против компьютера
    path: 'tic-tac-toe',
    loadChildren: './modules/tic-tac-toe/tic-tac-toe.module#TicTacToeModule'
  },
  {
    // Todo, по моим прикидкам готовность 70-80%, набросаны первые стили
    path: 'calculator',
    loadChildren: './modules/calculator/calculator.module#CalculatorModule'
  },
  {
    path: 'eng',
    loadChildren: './modules/eng/eng.module#EngModule'
  },
  {
    path: 'Угадай число',
    loadChildren: './modules/number/number.module#NumberModule'
  },
  {
    path: 'Zen-wallet',
    loadChildren: './modules/money/money.module#MoneyModule'
  },
  {
    path: 'ПОЕ',
    loadChildren: './modules/poe/poe.module#PoeModule'
  },
  {
    path: 'tour-of-heroes',
    loadChildren: './modules/tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule'
  }
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// все модули
// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';
//
// import { LaborerUrls } from './laborer-urls';
// import { NeedActivationGuardService } from '../modules/shared/services/check-activation-guard.service'
// import { PageNotFoundComponent } from '../modules/page-not-found/components/page-not-found/page-not-found.component'
// import { RestServiceErrorComponent } from '../modules/page-not-found/components/rest-service-error/rest-service-error.component';
//
// const appRoutes: Routes = [
//   {
//     path: '',
//     loadChildren: './modules/default/default.module#DefaultModule'
//   },
//   {
//     path: 'login',
//     loadChildren: './modules/login/login.module#LoginModule'
//   },
//   {
//     path: 'merchandiser',
//     loadChildren: './modules/merchandiser-control/merchandiser-control.module#MerchandiserControlModule'
//   },
//   {
//     path: 'buyerinfo',
//     loadChildren: './modules/buyer-info/buyer-info.module#BuyerInfoModule'
//   },
//   {
//     path: 'picking',
//     // loadChildren: './modules/picking-goods/picking-goods.module#PickingGoodsModule',
//     loadChildren: './modules/picking-goods-api/picking-goods-api.module#PickingGoodsApiModule',
//     canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'inventory',
//     loadChildren: './modules/inventory/inventory.module#InventoryModule'
//   },
//   {
//     path: 'salereport',
//     loadChildren: './modules/sales-report/sales-report.module#SalesReportModule'
//   },
//   {
//     path: 'disprices',
//     loadChildren: './modules/price-control/price-control.module#PriceControlModule'
//   },
//   {
//     path: 'palletinventory',
//     loadChildren: './modules/pallet-inventory/pallet-inventory.module#PalletInventoryModule'
//   },
//   {
//     path: 'palletconsist',
//     loadChildren: './modules/pallet-consist/pallet-consist.module#PalletConsistModule'
//   },
//   {
//     path: 'mp',
//     loadChildren: './modules/site-info/site-info.module#SiteInfoModule'
//   },
//   {
//     path: 'pall',
//     loadChildren: './modules/work-with-pallet/work-with-pallet.module#WorkWithPalletModule'
//   },
//   {
//     path: 'palletmove',
//     loadChildren: './modules/pallet-move/pallet-move.module#PalletMoveModule'
//   },
//   {
//     path: 'alcoinventory',
//     loadChildren: './modules/alcohol-inventory/alcohol-inventory.module#AlcoholInventoryModule'
//   },
//   {
//     path: 'freepallet',
//     loadChildren: './modules/acceptance/acceptance.module#AcceptanceModule'
//   },
//   {
//     path: 'waresinfo',
//     // loadChildren:  './modules/new-wares-info/wares-info.module#WaresInfoModule'  // новый
//     loadChildren: './modules/wares-info/wares-info.module#WaresInfoModule'
//   },
//   {
//     path: 'cashboxcheck',
//     loadChildren: './modules/cashbox/cashbox.module#CashboxModule'
//   },
//   {
//     path: 'gatequeue',
//     loadChildren: './modules/gate-queue/gate-queue.module#GateQueueModule'
//   },
//   {
//     path: 'gateman',
//     loadChildren: './modules/gate-man/gate-man.module#GateManModule'
//   },
//   {
//     path: 'menu',
//     loadChildren: './modules/menu/menu.module#MenuModule'
//   },
//   {
//     path: 'azparams',
//     loadChildren: './modules/az-params/az-params.module#AzParamsModule'
//   },
//   // {
//   //   path: 'closesession',
//   //   loadChildren: './modules/close-session/close-session.module#CloseSessionModule'
//   // },
//   {
//     path: 'default',
//     loadChildren: './modules/old-base-document/old-base-document.module#OldBaseDocumentModule'
//   },
//   {
//     path: 'buyerinfo',
//     loadChildren: './modules/buyer-info/buyer-info.module#BuyerInfoModule'
//   },
//   {
//     path: 'employees',
//     loadChildren: './modules/workers-tracking/workers-tracking.module#WorkersTrackingModule',
//     canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'employeesold',
//     loadChildren: './modules/workers-tracking-old/workers-tracking-old.module#WorkersTrackingOldModule',
//     canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'shopreport',
//     loadChildren: './modules/shop-report/shop-report.module#ShopReportModule',
//     canActivate: [NeedActivationGuardService]
//   },
//   {
//     path: 'capacity',
//     loadChildren: './modules/storage-capacity/storage-capacity.module#StorageCapacityModule'
//   },
//   {
//     path: 'internetshop',
//     loadChildren: './modules/soft-checks/soft-checks.module#SoftChecksModule'
//   },
//   {
//     path: 'palletinventorynew',
//     loadChildren: './modules/complicated-inventory/complicated-inventory.module#ComplicatedInventoryModule'
//   },
//   {
//     path: 'artmanagement',
//     loadChildren: './modules/article-management/article-management.module#ArticleManagementModule'
//   },
//   {
//     path: 'privatemark',
//     loadChildren: './modules/private-trade-mark/private-trade-mark.module#PrivateTradeMarkModule'
//   },
//   {
//     path: 'messagespvs',
//     loadChildren: './modules/message-spvs/message-spvs.module#MessageSpvsModule'
//   },
//   {
//     path: 'complicatedinv',
//     loadChildren: './modules/complicated-inventory/complicated-inventory.module#ComplicatedInventoryModule'
//   },
//   {
//     path: 'production',
//     loadChildren: './modules/production/production.module#ProductionModule'
//   },
//   {
//     path: 'ishopselect',
//     loadChildren: './modules/ishop-orders-collecting/ishop-orders-collecting.module#IshopOrdersCollectingModule'
//   },
//   {
//     path: 'ishopboxes',
//     loadChildren: './modules/ishop-orders-boxes/ishop-orders-boxes.module#IshopOrdersBoxesModule'
//   },
//   {
//     path: 'palletlabelprint',
//     loadChildren: './modules/palletprinting/palletprinting.module#PalletPrintingModule'
//   },
//   {
//     path: 'couponvalidation',
//     loadChildren: './modules/coupon-validation/coupon-validation.module#CouponValidationModule'
//   },
//   {
//     path: 'replenishment',
//     loadChildren: './modules/replenishment/replenishment.module#ReplenishmentModule',
//     canActivate: [NeedActivationGuardService]
//   },
//   {
//     path: 'receiptwares',
//     loadChildren: './modules/alcohol-acceptance/alcohol-acceptance.module#AlcoholAcceptanceModule',
//     canActivate: [NeedActivationGuardService]
//   },
//   {
//     path: 'boxfilling',
//     loadChildren: './modules/box-management/box-management.module#BoxManagementModule',
//     canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'recheck-box',
//     loadChildren: './modules/recheck-box/recheck-box.module#RecheckBoxModule',
//     // canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'shipmentcontrol',
//     loadChildren: './modules/shipmentcontrol/shipmentcontrol.module#ShipmentcontrolModule',
//     canActivate: [NeedActivationGuardService]
//   },
//   {
//     path: 'soft-cheque',
//     loadChildren: './modules/soft-cheque-generation/soft-cheque-generation.module#SoftChequeGenerationModule',
//     canActivate: [NeedActivationGuardService],
//   },
//   {
//     path: 'barcodeinfo',
//     loadChildren: './modules/alcohol-info/alcohol-info.module#AlcoholInfoModule',
//   },
//   {
//     path: 'shipmentpallet',
//     loadChildren: './modules/shipment-pallet/shipment-pallet.module#ShipmentPalletModule'
//   },
//   {
//     path: 'extractshipmentcontrol',
//     loadChildren: './modules/extractshipmentcontrol/extractshipmentcontrol.module#ExtractshipmentcontrolModule'
//   },
//   {
//     path: 'reconcextractedpositions',
//     loadChildren: './modules/position-reconciliation/position-reconciliation.module#PositionReconciliationModule',
//     canActivate: [NeedActivationGuardService],
//   },
//
//   ...LaborerUrls,
//   {
//     path: '504',
//     component: RestServiceErrorComponent
//   },
//
//
//
//
//
//
//
//
//
//   // Это должно быть всегда в самом конце
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }
//
// ];
//
// // export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
