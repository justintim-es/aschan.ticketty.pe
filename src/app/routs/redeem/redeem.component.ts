import { SubscriptionLike, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getRedeemIsFetchSuccess, getRedeemRecognition } from 'src/app/redux/redeem/selectors';
import { RDX_REDEEM_FETCH } from 'src/app/redux/redeem/actions';
@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit {
  isFetchSuccess: SubscriptionLike;
  activatedRoute: SubscriptionLike;
  new_recognition_sub: SubscriptionLike;
  new_recognition: string;
  event: number;
  resale: number;
  recognition: string;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.event = 0;
    this.resale = 0;
    this.recognition = '';
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.event = parseInt(res.get('event')!);
      this.resale = parseInt(res.get('resale')!);
      this.recognition = res.get('recognition')!;
    });
    this.new_recognition = '';
    this.new_recognition_sub = this.store.select(getRedeemRecognition).subscribe(res => this.new_recognition = res);
    this.isFetchSuccess = this.store.select(getRedeemIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate([`/tickets/${this.event}/${this.new_recognition}`])
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_REDEEM_FETCH,
      id: this.resale,
      old_recognition: this.recognition
    })

  }

}
