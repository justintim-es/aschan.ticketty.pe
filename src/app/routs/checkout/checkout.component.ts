
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubscriptionLike, Observable } from 'rxjs';
import { RDX_CHECKOUT_FETCH, RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE_TRIGGER } from 'src/app/redux/checkout/actions';
import { getCheckoutIsCurtainOpen, getCheckoutItems, getCheckoutTotalPrice, getCheckoutIsFetch, getCheckoutIsFetchSuccess, getCheckoutUrl, getCheckoutCart, getCheckoutIsFetchError, getCheckoutIsRouteBack } from 'src/app/redux/checkout/selectors';
import { curtainOpenTop, curtainOpenBottom} from 'src/app/animations';
import { FormControl } from '@angular/forms';
import { ICartItem, ICart } from 'src/app/redux/checkout/reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckoutSnackComponent } from 'src/app/routs/checkout/checkout-snack/checkout-snack.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom
  ]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  activatedRoute: SubscriptionLike;
  isCurtainOpen: Observable<boolean>;
  carts: Observable<ICartItem[]>
  total_price: Observable<number>;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: SubscriptionLike;
  url: Observable<string>;
  cart: Observable<ICart>;
  isRouteBack: SubscriptionLike;
  party_id: number;
  constructor(
    private snack: MatSnackBar,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {
    this.party_id = 0;
    this.activatedRoute = this.route.paramMap.subscribe(params => {
      this.party_id = parseInt(params.get('event')!);
      this.store.dispatch({
        type: RDX_CHECKOUT_FETCH,
        recognition: params.get('recognition'),
        event: parseInt(params.get('event')!)
      })
    })
    this.isCurtainOpen = this.store.select(getCheckoutIsCurtainOpen);
    this.carts = this.store.select(getCheckoutItems);
    this.total_price = this.store.select(getCheckoutTotalPrice);
    this.isFetch = this.store.select(getCheckoutIsFetch);
    this.isFetchSuccess = this.store.select(getCheckoutIsFetchSuccess);
    this.url = this.store.select(getCheckoutUrl);
    this.cart = this.store.select(getCheckoutCart);
    this.isFetchError = this.store.select(getCheckoutIsFetchError).subscribe(res => {
      if (res) {
        this.snack.openFromComponent(CheckoutSnackComponent, { duration: 2000 })
      }
    });
    this.isRouteBack = this.store.select(getCheckoutIsRouteBack).subscribe(res => {
      if (res) {
        this.router.navigate(['/order/' + this.party_id])
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE_TRIGGER
    })
  }
  ngOnDestroy(): void {
    this.activatedRoute.unsubscribe();
  }

}
