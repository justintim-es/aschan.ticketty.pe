import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './routs/order/order.component';
import { CheckoutComponent } from './routs/checkout/checkout.component';
import { FormComponent } from './routs/form/form.component';
import { CreateComponent } from './routs/create/create.component';
import { TicketsComponent } from './routs/tickets/tickets.component';
import { ResaleComponent } from './routs/resale/resale.component';
import { SellComponent } from './routs/tickets/sell/sell.component';
import { ResaleSuccessComponent } from './routs/resale-success/resale-success.component';
import { ResaleCheckoutComponent } from './routs/resale/resale-checkout/resale-checkout.component';
import { RedeemComponent } from './routs/redeem/redeem.component';
const routes: Routes = [
  {
    path: 'order/:id', component: OrderComponent
  },
  {
    path: 'order/:id/:cart', component: OrderComponent
  },
  {
    path: 'form/:id/:recognition', component: FormComponent
  },
  {
    path: 'form/:id/:recognition/:resale', component: FormComponent
  },
  {
    path: 'checkout/:event/:recognition', component: CheckoutComponent
  },
  {
    path: 'resale-checkout/:event/:recognition/:resale', component: ResaleCheckoutComponent
  },
  {
    path: 'create/:event/:recognition', component: CreateComponent
  },
  {
    path: 'redeem/:event/:resale/:recognition', component: RedeemComponent
  },
  {
    path: 'tickets/:event/:recognition', component: TicketsComponent
  },
  {
    path: 'tickets-sell/:event/:recognition/:value', component: SellComponent
  },
  {
    path: 'resale/:event', component: ResaleComponent
  },
  {
    path: 'resale/:event/:recognition', component: ResaleComponent
  },
  {
    path: 'resale-form/:id/:recognition', component: FormComponent
  },
  {
    path: 'resale-success/:event/:id', component: ResaleSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
