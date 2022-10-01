import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, SubscriptionLike } from  'rxjs';
import { getOrderRecognition } from 'src/app/redux/order/selectors';
@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit, OnDestroy {
  recognition: Observable<string>
  event: number;
  activatedRoute: SubscriptionLike;
  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.event = 0;
    this.activatedRoute = this.route.paramMap.subscribe(res => {
        this.event = parseInt(res.get('event')!);
    })
    this.recognition = this.store.select(getOrderRecognition);

 }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.activatedRoute.unsubscribe();
  }
}
