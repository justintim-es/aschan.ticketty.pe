import { Component, OnInit, OnDestroy } from '@angular/core';
import { curtainOpenTop, curtainOpenBottom, slide } from '../../animations';
import { Observable, SubscriptionLike } from 'rxjs';
import { RDX_TICKETS_OPEN_TRIGGER, RDX_TICKETS_RESALE_CANCEL, RDX_TICKETS_FETCH, RDX_TICKETS_SLIDE_ONE, RDX_TICKETS_ONBOARD, RDX_TICKETS_RESET } from 'src/app/redux/tickets/actions';
import { getTicketsLink, getTicketsIsCurtainOpen, getTicketsTickets, getTicketsIndex, getTicketsBottomIndex, getTicketsIsTop, getTicketsIsBottom, getTicketsTopState, getTicketsBottomState, getTicketsTicket, getTicketsIsOnboard, getTicketsIsOnboardSuccess, getTicketsIsCancel, getTicketsIsOnboarded, getTicketsTicketValue } from 'src/app/redux/tickets/selectors';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ITicket } from 'src/app/redux/tickets/reducer';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom,
    slide
  ]
})
export class TicketsComponent implements OnInit, OnDestroy {
  isCurtainOpen: Observable<boolean>;
  index: Observable<number>;
  bottomIndex: Observable<number>;
  tickets: Observable<ITicket[]>;
  ticket: Observable<ITicket>;
  activatedRoute: SubscriptionLike;
  topState: Observable<string>;
  bottomState: Observable<string>;
  isTop: Observable<boolean>;
  isBottom: Observable<boolean>;
  link: string;
  linkSub: SubscriptionLike;
  isOnboard: Observable<boolean>;
  isOnboardSuccess: SubscriptionLike;
  event: number;
  recognition: string;
  isCancel: Observable<boolean>;
  isOnboarded: SubscriptionLike;
  valueSub: SubscriptionLike;
  value: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
  ) {
    this.event = 0;
    this.recognition = '';
    this.isCurtainOpen = this.store.select(getTicketsIsCurtainOpen);
    this.index = this.store.select(getTicketsIndex);
    this.tickets = this.store.select(getTicketsTickets);
    this.bottomIndex = this.store.select(getTicketsBottomIndex);
    this.activatedRoute = this.route.paramMap.subscribe(res => {
        this.event = parseInt(res.get('event')!);
        this.recognition = res.get('recognition')!;
        this.store.dispatch({
          type: RDX_TICKETS_FETCH,
          event: this.event,
          recognition: this.recognition
        })
    });
    this.topState = this.store.select(getTicketsTopState);
    this.bottomState = this.store.select(getTicketsBottomState);
    this.isTop = this.store.select(getTicketsIsTop);
    this.isBottom = this.store.select(getTicketsIsBottom);
    this.ticket = this.store.select(getTicketsTicket);
    this.link = '';
    this.linkSub = this.store.select(getTicketsLink).subscribe(res => this.link = res);
    this.isOnboard = this.store.select(getTicketsIsOnboard);
    this.isOnboardSuccess = this.store.select(getTicketsIsOnboardSuccess).subscribe(res => {
      if (res) {
        window.location.href = this.link;
      }
    });
    this.isCancel = this.store.select(getTicketsIsCancel);
    this.value = '';
    this.valueSub = this.store.select(getTicketsTicketValue).subscribe(res => this.value = res);
    this.isOnboarded = this.store.select(getTicketsIsOnboarded).subscribe(res => {
      if (res) {
        this.router.navigate(['/tickets-sell/' + this.event + '/' + this.recognition + '/' + this.value])
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_TICKETS_OPEN_TRIGGER
    })
  }
  slischid(left: boolean) {
    this.store.dispatch({
      type: RDX_TICKETS_SLIDE_ONE,
      left: left
    })
  }
  sell() {
    this.store.dispatch({
      type: RDX_TICKETS_ONBOARD,
      event: this.event,
      recognition: this.recognition
    })
  }
  cancel() {
    this.store.dispatch({
      type: RDX_TICKETS_RESALE_CANCEL,
      event: this.event,
      recognition: this.recognition
    })
  }
  ngOnDestroy() {
    this.activatedRoute.unsubscribe();
    this.linkSub.unsubscribe();
    this.valueSub.unsubscribe();
    this.isOnboarded.unsubscribe();
    this.store.dispatch({
      type: RDX_TICKETS_RESET
    })
  }
}
