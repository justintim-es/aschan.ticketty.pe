import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCheckoutFetchError } from 'src/app/redux/checkout/selectors';

@Component({
  selector: 'app-checkout-snack',
  templateUrl: './checkout-snack.component.html',
  styleUrls: ['./checkout-snack.component.css']
})
export class CheckoutSnackComponent implements OnInit {
  fetchError: Observable<any>;
  constructor(
    private store: Store
  ) {
    this.fetchError = this.store.select(getCheckoutFetchError);
  }

  ngOnInit(): void {
  }

}
