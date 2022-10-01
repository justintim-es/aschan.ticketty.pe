import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getOrderCartFetchError } from 'src/app/redux/order/selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-error-snack',
  templateUrl: './error-snack.component.html',
  styleUrls: ['./error-snack.component.css']
})
export class ErrorSnackComponent implements OnInit {
  cartFetchError: Observable<any>
  constructor(
    private store: Store
  ) {
    this.cartFetchError = this.store.select(getOrderCartFetchError);
  }

  ngOnInit(): void {
  }

}
