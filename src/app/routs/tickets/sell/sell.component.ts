import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RDX_TICKETS_SELL_FETCH, RDX_TICKETS_SELL_RESET } from 'src/app/redux/tickets-sell/actions';
import { getTicketsSellIsFetch, getTicketsSellIsFetchSuccess } from 'src/app/redux/tickets-sell/selectors';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit, OnDestroy {
  priceFormControl: FormControl;
  price: number;
  activatedRoute: SubscriptionLike;
  ticket_value: string;
  isFetch: Observable<boolean>;
  event: number;
  isFetchSuccess: SubscriptionLike;
  recognition: string;
  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.price = 0;
    this.event = 0;
    this.ticket_value = '';
    this.recognition = ''
    this.priceFormControl = new FormControl('', [
      Validators.required
    ]);
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.event = parseInt(res.get('event')!);
      this.recognition = res.get('recognition')!;
      this.ticket_value = res.get('value')!;
    });
    this.isFetch = this.store.select(getTicketsSellIsFetch);
    this.isFetchSuccess = this.store.select(getTicketsSellIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/tickets/' + this.event + '/' + this.recognition ]);
      }
    });
  }

  ngOnInit(): void {
  }
  sell() {
    this.store.dispatch({
      type: RDX_TICKETS_SELL_FETCH,
      value: this.ticket_value,
      price: this.price,
      recognition: this.recognition,
      event: this.event
    })
  }
  ngOnDestroy() {
    this.store.dispatch({
      type: RDX_TICKETS_SELL_RESET
    })
  }
}
