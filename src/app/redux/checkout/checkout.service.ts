import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { rdxCheckoutFetch, RDX_CHECKOUT_FETCH_SUCCESS, RDX_CHECKOUT_FETCH_ERROR, rdxCheckoutIsCurtainOpenTrueTrigger, RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE, rdxCheckoutFetchError, RDX_CHECKOUT_ROUTE_BACK } from './actions';
import { aschax } from '../aschax';
import { AxiosError } from 'axios';
import { switchMap, delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private actions: Actions
  ) { }

  isCurtainOpenTrueTrigger = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCheckoutIsCurtainOpenTrueTrigger),
      delay(500),
      map(ac => {
        return {
          type: RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE
        }
      })
    )
  })

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCheckoutFetch),
      switchMap(ac => aschax.get(`/api/cart/${ac.event}/${ac.recognition}`).then(res => {
        return {
          type: RDX_CHECKOUT_FETCH_SUCCESS,
          items: res.data.items,
          total_price: res.data.total_price,
          url: res.data.url,
          cart: res.data.cart
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_CHECKOUT_FETCH_ERROR,
          error: err.response?.data
        }
      }))
    )
  })
  fetchError = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCheckoutFetchError),
      delay(2000),
      map(ac => {
        return {
          type: RDX_CHECKOUT_ROUTE_BACK
        }
      })
    )
  })




}
