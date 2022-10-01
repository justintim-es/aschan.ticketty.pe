import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './routs/order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { OrderService } from './redux/order/order.service';
import { orderReducer } from './redux/order/reducer';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutComponent } from './routs/checkout/checkout.component';
import { checkoutReducer } from './redux/checkout/reducer';
import { CheckoutService} from  './redux/checkout/checkout.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackComponent } from './routs/order/snack/snack.component';
import { CreateComponent } from './routs/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './routs/email/email.component';
import { FormComponent } from './routs/form/form.component';
import { FormItemComponent } from './routs/form/form-item/form-item.component';
import { FormService } from './redux/form/form.service';
import { formReducer } from './redux/form/reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateService } from './redux/create/create.service';
import { ccreateReducer } from './redux/create/reducer';
import { TicketsComponent } from './routs/tickets/tickets.component';
import { TicketsService } from './redux/tickets/tickets.service';
import { ticketsReducer } from './redux/tickets/reducer';
import { ResaleComponent } from './routs/resale/resale.component';
import { SellComponent } from './routs/tickets/sell/sell.component';
import { TicketsSellService } from './redux/tickets-sell/tickets-sell.service';
import { ticketsSellReducer } from './redux/tickets-sell/reducer';
import { ResaleService } from './redux/resale/resale.service';
import { resaleReducer } from './redux/resale/reducer';
import { ResaleSuccessComponent } from './routs/resale-success/resale-success.component';
import { resaleSuccessReducer } from  './redux/resale-success/reducer';
import { ResaleSuccessService } from './redux/resale-success/resale-success.service';
import { ResaleFormComponent } from './routs/resale/resale-form/resale-form.component';
import { ResaleCheckoutComponent } from './routs/resale/resale-checkout/resale-checkout.component';
import { ResaleCheckoutService } from './redux/resale-checkout/resale-checkout.service';
import { resaleCheckoutReducer } from './redux/resale-checkout/reducer';
import { RedeemService } from './redux/redeem/redeem.service';
import { redeemReducer } from './redux/redeem/reducer';
import { RedeemComponent } from './routs/redeem/redeem.component';
import { CheckoutSnackComponent } from './routs/checkout/checkout-snack/checkout-snack.component';
import { ErrorSnackComponent } from './routs/order/error-snack/error-snack.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CheckoutComponent,
    SnackComponent,
    CreateComponent,
    EmailComponent,
    FormComponent,
    FormItemComponent,
    TicketsComponent,
    ResaleComponent,
    SellComponent,
    ResaleSuccessComponent,
    ResaleFormComponent,
    ResaleCheckoutComponent,
    RedeemComponent,
    CheckoutSnackComponent,
    ErrorSnackComponent
  ],
  imports: [
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    NgScrollbarModule,
    MatSelectModule,
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      orderReducer: orderReducer,
      checkoutReducer: checkoutReducer,
      formReducer: formReducer,
      ccreateReducer: ccreateReducer,
      ticketsReducer: ticketsReducer,
      ticketsSellReducer: ticketsSellReducer,
      resaleReducer: resaleReducer,
      resaleSuccessReducer: resaleSuccessReducer,
      resaleCheckoutReducer: resaleCheckoutReducer,
      redeemReducer: redeemReducer
    }, {}),
    EffectsModule.forRoot([
      OrderService,
      CheckoutService,
      FormService,
      CreateService,
      TicketsService,
      TicketsSellService,
      ResaleService,
      ResaleSuccessService,
      ResaleCheckoutService,
      RedeemService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
