import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { aschax } from '../aschax';
import { switchMap, delay, map } from 'rxjs/operators';
import { rdxResaleCheckoutFetch, RDX_RESALE_CHECKOUT_FETCH_SUCCESS, rdxResaleIsCurtainOpenTrueTrigger, RDX_RESALE_IS_CURTAIN_OPEN_TRUE } from './actions';
@Injectable({
  providedIn: 'root'
})
export class ResaleCheckoutService {

  constructor(
    private actions: Actions
  ) { }
  resaleCheckout = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxResaleIsCurtainOpenTrueTrigger),
      delay(1000),
      map(ac => {
        return {
          type: RDX_RESALE_IS_CURTAIN_OPEN_TRUE
        }
      })
    )
  })

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxResaleCheckoutFetch),
      switchMap(ac => aschax.get(`/api/resale/checkout/${ac.resale}/${ac.recognition}`).then(res => {
        return {
          type: RDX_RESALE_CHECKOUT_FETCH_SUCCESS,
          cart: res.data.cart,
          ticket: res.data.ticket
        }
      }))
    )
  })
}
