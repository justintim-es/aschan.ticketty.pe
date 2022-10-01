import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { getCreateIsFetchSuccess } from 'src/app/redux/create/selectors';
import { RDX_CREATE_FETCH } from 'src/app/redux/create/actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  activatedRoute: SubscriptionLike;
  isFetchSuccess: SubscriptionLike;
  event: number;
  recognition: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.event = 0;
    this.recognition = '';
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.event = parseInt(res.get('event')!);
      this.recognition = res.get('recognition')!;
      this.store.dispatch({
        type: RDX_CREATE_FETCH,
        recognition: this.recognition,
        event: this.event
      })
    })
    this.isFetchSuccess = this.store.select(getCreateIsFetchSuccess).subscribe(res => {
      if (res) {
          this.router.navigate(['/tickets/' + this.event + '/' + this.recognition ])
      }
    });
   }

  ngOnInit(): void {
  }

}
