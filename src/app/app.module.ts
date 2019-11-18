import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // PageNotFoundModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule, ModuleWithProviders, Injector, ErrorHandler } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//
// import { CustomMaterialModule } from '../custom-material/custom-material.module';
//
// import { RequestBlockScreenComponent } from './components/request-block-screen/request-block-screen.component';
// import { QueryProgressBarComponent } from './components/query-progress-bar/query-progress-bar.component';
//
// import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
//
// import { FindComponent } from './components/find/find.component';
//
// import { CalculatorForPieceComponent } from './components/calculator/modal/for-piece/calculator.component';
// import { CalculatorForWeightComponent } from './components/calculator/modal/for-weight/calculator.component';
// import { CalculatorModalComponent } from './components/calculator/modal/calculator.component';
//
// import { SystemMessageComponent } from './components/system-message/system-message.component';
//
// import { LimitLengthPipe } from './components/calculator/calculator.pipe';
// import { SwitcherPipe } from './pipes/switcher.pipe';
// import { DateFormatPipe } from './pipes/dateformat.pipe';
//
// import { RestService } from './services/rest.service';
// import { InputService } from './services/input.service';
// import { WorkWithEnvService } from './services/work-with-env.service';
// import { MenuService } from './services/menu.service';
// import { TaskService } from './services/task.service';
// import { BarcodeService } from './services/barcode.service';
// import { RequestBlockScreenService } from './services/request-block-screen.service';
// import { PalletService } from './services/pallet.service';
// import { SiteInfoService } from './services/site-info.service';
// import { DefaultService } from './services/default.service';
// import { UniversalDocService } from './services/universal-doc.service';
// import { WaresService } from './services/wares.service';
// import { HashStorageService } from './services/hash-storage.service';
// import { SystemMessageService } from './services/system-message.service';
// import { ConfigService } from './services/config.service';
// import { LoginService } from './services/login.service';
// import { NumFormatPipe } from './pipes/num-format.pipe';
// import { UserSegmentsService } from './services/user-segments.service';
// import { RemovePreZerosPipe } from './pipes/remove-pre-zeros.pipe';
// import { DateToStringPipe } from './pipes/date-to-string.pipe';
// import { GetTotalShopReportService } from './services/get-total-shop-report.service';
// import { HighlightPipe } from './pipes/highlight.pipe';
// import { NeedActivationGuardService } from './services/check-activation-guard.service';
// import { CheckModuleAvailableGuardService } from './services/check-module-available-guard.service';
// import { DocumentsService } from './services/documents.service';
// import { GetTwoFAService } from './services/get-two-fa.service';
// import { SendTwofaMessageService } from './services/send-twofa-message.service';
// import { BuyerInfoService } from './services/buyer-info.service';
// import { MaterialModule } from '../material-module/material.module';
// import { CalculatorForBoxComponent } from './components/calculator/modal/for-box/calculator.component';
// import { CalculatorForBoxWeightComponent } from './components/calculator/modal/for-box-weight/calculator.component';
// import { ModalWinComponent } from './components/modal-window/modal-win.component';
// import { SharedTooltipDirective } from './directives/tooltip/shared-tooltip.directive';
// import { InputDateComponent } from './components/input-date/input-date.component';
// import { PickDateComponent } from './components/pick-date/pick-date.component';
// import { HumanDatePipe } from './pipes/human-date.pipe';
// import { GetCuaServerTimeService } from './services/get-cua-server-time.service';
// import { IdleService } from './services/idle.service';
// import { GetTasksDataService } from './services/get_tasks_data.service';
// import { PrintPalletsLabelService } from './services/print-pallets-label.service';
// import { ReducePipe } from './pipes/reduce.pipe';
// import { HttpClientModule } from '@angular/common/http';
// import { HumanizeDateTimePipe } from './pipes/humanize-date-time.pipe';
// import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
// import { MessageService } from './services/modal_window_message.service';
// import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material';
// import { Platform, PlatformModule } from '@angular/cdk/platform';
// import { ModalCalculatorPieceComponent } from './components/modal-calculator/modal-calculator-piece/modal-calculator-piece.component';
// import {
//   ModalCalculatorBoxPieceComponent
// } from './components/modal-calculator/modal-calculator-box-piece/modal-calculator-box-piece.component';
// import {
//   ModalCalculatorBoxWeightComponent
// } from './components/modal-calculator/modal-calculator-box-weight/modal-calculator-box-weight.component';
// import { ModalCalculatorWeightComponent } from './components/modal-calculator/modal-calculator-weight/modal-calculator-weight.component';
// import {
//   ModalCalculatorKeyboardComponent
// } from './components/modal-calculator/modal-calculator-keyboard/modal-calculator-keyboard.component';
// import { ModalCalculatorInputComponent } from './components/modal-calculator/modal-calculator-input/modal-calculator-input.component';
// import { ModalCalculatorActionsComponent } from './components/modal-calculator/modal-calculator-actions/modal-calculator-actions.component';
// import {SpinnerComponent} from './components/spinner/spinner.component';
// import { CookieService } from 'ngx-cookie-service';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
// import { ErrorsHandler } from '../../helpers/errors.handler';
// import { ModalCalculatorTitleComponent } from './components/modal-calculator/modal-calculator-title/modal-calculator-title.component';
// import { AlertComponent } from './components/popup/alert/alert.component';
// import { InputComponent } from './components/popup/input/input.component';
// import { CalcCommonComponent } from './components/calculator/calc-common/calc-common.component';
//
//
// @NgModule({
//   declarations: [
//     RequestBlockScreenComponent,
//     QueryProgressBarComponent,
//
//     AreYouSureComponent,
//     ModalWinComponent,
//
//     AlertComponent,
//     InputComponent,
//
//     FindComponent,
//
//     CalculatorForPieceComponent,
//     CalculatorForWeightComponent,
//     CalculatorModalComponent,
//     CalculatorForBoxComponent,
//     CalculatorForBoxWeightComponent,
//
//     SystemMessageComponent,
//
//     LimitLengthPipe,
//     SwitcherPipe,
//     DateFormatPipe,
//     NumFormatPipe,
//     RemovePreZerosPipe,
//     DateToStringPipe,
//     HighlightPipe,
//     SharedTooltipDirective,
//     InputDateComponent,
//     PickDateComponent,
//     HumanDatePipe,
//     HumanizeDateTimePipe,
//     ReducePipe,
//     MapToIterablePipe,
//     ModalCalculatorPieceComponent,
//     ModalCalculatorBoxPieceComponent,
//     ModalCalculatorBoxWeightComponent,
//     ModalCalculatorWeightComponent,
//     ModalCalculatorKeyboardComponent,
//     ModalCalculatorInputComponent,
//     ModalCalculatorActionsComponent,
//     SpinnerComponent,
//     ModalCalculatorTitleComponent,
//     CalcCommonComponent,
//   ],
//   imports: [
//     CommonModule,
//     FormsModule,
//     CustomMaterialModule,
//     MaterialModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     PlatformModule,
//   ],
//   exports: [
//
//     MaterialModule,
//     PlatformModule,
//     RequestBlockScreenComponent,
//     QueryProgressBarComponent,
//
//     AreYouSureComponent,
//     ModalWinComponent,
//
//     FindComponent,
//
//     CalculatorForPieceComponent,
//     CalculatorForWeightComponent,
//     CalculatorModalComponent,
//     CalculatorForBoxComponent,
//     CalculatorForBoxWeightComponent,
//     InputDateComponent,
//     PickDateComponent,
//     SpinnerComponent,
//
//     SystemMessageComponent,
//
//     LimitLengthPipe,
//     SwitcherPipe,
//     NumFormatPipe,
//     RemovePreZerosPipe,
//     DateToStringPipe,
//     HighlightPipe,
//     HumanDatePipe,
//     ReducePipe,
//     HumanizeDateTimePipe,
//     SharedTooltipDirective,
//     DateFormatPipe,
//     AlertComponent,
//     InputComponent,
//     CalcCommonComponent,
//   ],
//   entryComponents: [
//     PickDateComponent,
//     ModalWinComponent,
//     ModalCalculatorPieceComponent,
//     ModalCalculatorBoxPieceComponent,
//     ModalCalculatorBoxWeightComponent,
//     ModalCalculatorWeightComponent,
//     AlertComponent,
//     InputComponent,
//   ]
// })
// export class SharedModule {
//   static injector: Injector;
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: SharedModule,
//       providers: [
//         RestService,
//         InputService,
//         WorkWithEnvService,
//         MenuService,
//         TaskService,
//         BarcodeService,
//         RequestBlockScreenService,
//         PalletService,
//         SiteInfoService,
//         DefaultService,
//         UniversalDocService,
//         WaresService,
//         HashStorageService,
//         SystemMessageService,
//         ConfigService,
//         LoginService,
//         UserSegmentsService,
//         GetTotalShopReportService,
//         NeedActivationGuardService,
//         CheckModuleAvailableGuardService,
//         DocumentsService,
//         GetTwoFAService,
//         SendTwofaMessageService,
//         BuyerInfoService,
//         GetCuaServerTimeService,
//         IdleService,
//         PrintPalletsLabelService,
//         GetTasksDataService,
//         MessageService,
//         CookieService,
//         MomentDateAdapter,
//         { provide: MAT_DATE_LOCALE, useValue: 'ru' },
//         { provide: DateAdapter, useClass: NativeDateAdapter, deps: [MAT_DATE_LOCALE, Platform] },
//         { provide: ErrorHandler, useClass: ErrorsHandler },
//       ]
//     };
//   }
//
//   constructor(private injector: Injector) {
//     SharedModule.injector = injector;
//   }
// }

