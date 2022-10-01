import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionLike, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getResaleSuccessRecognition, getResaleSuccessIsFetchSuccess, getResaleSuccessIsFetch } from 'src/app/redux/resale-success/selectors';
import { RDX_RESALE_SUCCESS_FETCH } from 'src/app/redux/resale-success/actions';
@Component({
  selector: 'app-resale-success',
  templateUrl: './resale-success.component.html',
  styleUrls: ['./resale-success.component.css']
})
export class ResaleSuccessComponent implements OnInit, OnDestroy {
  activatedRoute: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  recognition: string;
  recognitionSub: SubscriptionLike;
  event: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.event = 0;
    this.recognition = '';
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.event = parseInt(res.get('event')!);
      this.store.dispatch({
        type: RDX_RESALE_SUCCESS_FETCH,
        event: this.event,
        id: res.get('id')!
      })
    });
    this.recognitionSub = this.store.select(getResaleSuccessRecognition).subscribe(res => this.recognition = res);
    this.isFetch = this.store.select(getResaleSuccessIsFetch)
    this.isFetchSuccess = this.store.select(getResaleSuccessIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/tickets/' + this.event + '/'  + this.recognition ]);
      }
    })
   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.activatedRoute.unsubscribe();
  }

}
