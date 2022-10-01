import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER, RDX_RESALE_CHECKOUT_FETCH } from 'src/app/redux/resale-checkout/actions';
import { getResaleCheckoutCart, getResaleCheckoutIsFetch, getResaleCheckoutIsFetchSuccess, getResaleCheckoutTicket, getResaleCheckoutIsCurtainOpen } from 'src/app/redux/resale-checkout/selectors';
import { ITicket, ICart } from 'src/app/redux/resale-checkout/reducer';
import { Observable, SubscriptionLike } from 'rxjs';
import { curtainOpenTop, curtainOpenBottom } from 'src/app/animations';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resale-checkout',
  templateUrl: './resale-checkout.component.html',
  styleUrls: ['./resale-checkout.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom,
  ]
})
export class ResaleCheckoutComponent implements OnInit {
  isCurtainOpen: Observable<boolean>;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>
  cart: Observable<ICart>;
  ticket: Observable<ITicket>;
  activatedRoute: SubscriptionLike;
  resale: number;
  recognition:  string;
  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.resale = 0;
    this.recognition = '';
    this.isCurtainOpen = this.store.select(getResaleCheckoutIsCurtainOpen);
    this.isFetch = this.store.select(getResaleCheckoutIsFetch);
    this.isFetchSuccess = this.store.select(getResaleCheckoutIsFetchSuccess);
    this.cart = this.store.select(getResaleCheckoutCart);
    this.ticket = this.store.select(getResaleCheckoutTicket);
    this.activatedRoute = this.route.paramMap.subscribe(res => {
        this.resale = parseInt(res.get('resale')!);
        this.recognition = res.get('recognition')!;
    })
 }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER
    })
    this.store.dispatch({
      type: RDX_RESALE_CHECKOUT_FETCH,
      recognition: this.recognition,
      resale: this.resale
    });
  }

}
