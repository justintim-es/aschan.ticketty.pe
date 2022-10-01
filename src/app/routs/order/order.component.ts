import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { curtainOpenBottom, curtainOpenTop, enterFromLeft, enterFromTop, slide } from 'src/app/animations';
import { RDX_ORDER_FETCH_CART, RDX_ORDER_FETCH_EVENT, RDX_ORDER_SLIDE_ONE, RDX_ORDER_FETCH_OR_ADJUST_CART } from 'src/app/redux/order/actions';
import { IEvent, ITickettype } from 'src/app/redux/order/reducer';
import { getOrderEvent, getOrderIsCurtainOpen, getOrderIsFetchEvent, getOrderIsFetchEventSuccess, getOrderIsInfo, getOrderSold, getOrderLeft, getOrderIsTickettypes, getOrderTickettypes, getOrderTickettype, getOrderIsTop, getOrderTopState, getOrderBottomState, getOrderIsBottom, getOrderTickettypeBottom, getOrderTickettypeIndex, getOrderIsCartFetch, getOrderIsCartFetchSuccess, getOrderRecognition, getOrderIsCartFetched, getOrderIsCartFetchError } from 'src/app/redux/order/selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';
import { ErrorSnackComponent } from './error-snack/error-snack.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom,
    enterFromLeft,
    enterFromTop,
    slide
  ]
})
export class OrderComponent implements OnInit {
  isFetchEvent: Observable<boolean>;
  isFetchEventSuccess: Observable<boolean>;
  isCurtainOpen: Observable<boolean>;
  isInfo: Observable<boolean>;
  sold: Observable<number>;
  left: Observable<number>
  event: Observable<IEvent>;
  isTickettypes: Observable<boolean>;
  activatedRoute: SubscriptionLike;
  tickettypes: Observable<ITickettype[]>;
  tickettype: Observable<ITickettype>;
  topState: Observable<string>;
  bottomState: Observable<string>;
  isTop: Observable<boolean>;
  isBottom: Observable<boolean>;
  bottomTickettype: Observable<ITickettype>;
  tickettypeIndex: Observable<number>;
  isCartFetch: Observable<boolean>;
  isCartFetchSuccess: Observable<boolean>;
  isCartFetchSuccessSub: SubscriptionLike;
  isCartFetchError: SubscriptionLike;
  recognition: Observable<string>;
  cartQuantity: number;
  isCartFetched: Observable<boolean>;
  event_id: number;

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.isFetchEvent = this.store.select(getOrderIsFetchEvent);
    this.isFetchEventSuccess = this.store.select(getOrderIsFetchEventSuccess);
    this.isCurtainOpen = this.store.select(getOrderIsCurtainOpen);
    this.event = this.store.select(getOrderEvent);
    this.isInfo = this.store.select(getOrderIsInfo);
    this.sold = this.store.select(getOrderSold);
    this.left = this.store.select(getOrderLeft);
    this.isTickettypes = this.store.select(getOrderIsTickettypes)
    this.event_id = 0;
    this.activatedRoute = this.route.paramMap.subscribe(params => {
      this.event_id = parseInt(params.get('id')!)
      this.store.dispatch({
        type: RDX_ORDER_FETCH_EVENT,
        id: this.event_id
      })
    });
    this.tickettypes = this.store.select(getOrderTickettypes);
    this.tickettype = this.store.select(getOrderTickettype);
    this.topState = this.store.select(getOrderTopState);
    this.bottomState =this.store.select(getOrderBottomState);
    this.isTop = this.store.select(getOrderIsTop);
    this.isBottom = this.store.select(getOrderIsBottom);
    this.bottomTickettype = this.store.select(getOrderTickettypeBottom);
    this.tickettypeIndex = this.store.select(getOrderTickettypeIndex);
    this.isCartFetch = this.store.select(getOrderIsCartFetch);
    this.isCartFetchSuccess = this.store.select(getOrderIsCartFetchSuccess);
    this.isCartFetchSuccessSub = this.store.select(getOrderIsCartFetchSuccess).subscribe(res => {
      if (res) {
        this.snackbar.openFromComponent(SnackComponent, {
          duration: 2000
        });
      }
    })
    this.recognition = this.store.select(getOrderRecognition);
    this.isCartFetched = this.store.select(getOrderIsCartFetched);
    this.cartQuantity = 0;
    this.isCartFetchError = this.store.select(getOrderIsCartFetchError).subscribe(res => {
      if (res) {
        this.cartQuantity = 0;
        this.snackbar.openFromComponent(ErrorSnackComponent, {
          duration: 2000
        });
      }
    })
   }

  ngOnInit(): void {
  }
  slidesche(direction: string) {
    this.store.dispatch({
      type: RDX_ORDER_SLIDE_ONE,
      direction: direction,
    })
    this.cartQuantity = 0
   }
   changeQuantity() {
    this.store.dispatch({
      type: RDX_ORDER_FETCH_OR_ADJUST_CART,
      quantity: this.cartQuantity,
    });
   }

}
