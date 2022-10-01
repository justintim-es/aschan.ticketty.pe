import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getResaleIsCurtainOpen, getResaleTickets, getResaleEvent, getResaleRecognition, getResaleIsFetchSuccess, getResaleIsFetchCartSuccess } from 'src/app/redux/resale/selectors';
import { ITicket, IEvent } from 'src/app/redux/resale/reducer';
import { curtainOpenTop, curtainOpenBottom } from 'src/app/animations';
import { RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER, RDX_RESALE_FETCH, RDX_RESALE_CREATE_CART } from 'src/app/redux/resale/actions';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resale',
  templateUrl: './resale.component.html',
  styleUrls: ['./resale.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom,
  ]
})
export class ResaleComponent implements OnInit {
  isCurtainOpen: Observable<boolean>;
  activatedRoute: SubscriptionLike;
  tickets: Observable<ITicket[]>;
  event?: Observable<IEvent | null | undefined>;
  recognition: string;
  recognitionSub: SubscriptionLike;
  isFetchCartSuccess: SubscriptionLike;
  eschev: number;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.eschev = 0;
    this.id = 0;
    this.isCurtainOpen = this.store.select(getResaleIsCurtainOpen);
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.eschev = parseInt(res.get('event')!);
      this.store.dispatch({
        type: RDX_RESALE_FETCH,
        event: parseInt(res.get('event')!)
      });
    });
    this.tickets = this.store.select(getResaleTickets);
    this.event = this.store.select(getResaleEvent);
    this.recognition = '';
    this.recognitionSub = this.store.select(getResaleRecognition).subscribe(res => this.recognition = res);
    this.isFetchCartSuccess = this.store.select(getResaleIsFetchCartSuccess).subscribe(res => {
      if (res) {
        console.log(this.recognition, 'recog');
        this.router.navigate(['/form/' + this.eschev + '/' + this.recognition + '/' + this.id ]);
        // this.router.navigate(['/resale/' + this.eschev + '/' + this.recognition ]);
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER
    })
  }
  createCart(id: number) {
    this.id = id;
    this.store.dispatch({
      type: RDX_RESALE_CREATE_CART,
      id: id
    })
  }
}
