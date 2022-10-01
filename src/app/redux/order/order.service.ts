import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from '../aschax';
import { rdxOrderFetchEvent, rdxOrderFetchEventSuccess, rdxOrderIsCurtainOpenTrue, RDX_ORDER_FETCH_EVENT_SUCCESS, RDX_ORDER_IS_CURTAIN_OPEN_TRUE, RDX_ORDER_IS_INFO_TRUE, rdxOrderIsInfoTrue, RDX_ORDER_IS_TICKETTYPES_TRUE, rdxOrderSlideOne, RDX_ORDER_SLIDE_TWO, rdxOrderSlideTwo, RDX_ORDER_SLIDE_THREE, rdxOrderFetchCart, RDX_ORDER_FETCH_CART_ERROR, RDX_ORDER_FETCH_CART_SUCCESS, RDX_ORDER_ADJUST_CART, RDX_ORDER_ADJUST_CART_SUCCESS, rdxOrderAdjustCart, RDX_ORDER_FETCH_CART, rdxOrderFetchOrAdjustCart } from './actions';
import { map, switchMap, delay, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AxiosError } from 'axios';
import { Store } from '@ngrx/store';
import { getOrderTickettype, getOrderRecognition, getOrderIsCartFetched } from './selectors';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetchEvent = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderFetchEvent),
      switchMap(ac => aschax.get('/api/event/' + ac.id).then(res => {
        return {
          type: RDX_ORDER_FETCH_EVENT_SUCCESS,
          party: res.data.party,
          sold: res.data.sold,
          tickettypes: res.data.tickettypes
        }
      }))
    )
  })
  fetchEventSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderFetchEventSuccess),
      delay(1000),
      map(ac => {
        return {
          type: RDX_ORDER_IS_CURTAIN_OPEN_TRUE
        }
      })
    )
  })
  isCurtainOpenTrue = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderIsCurtainOpenTrue),
      delay(500),
      map(ac => {
        return {
          type: RDX_ORDER_IS_INFO_TRUE,
        }
      })
    )
  })
  isInfoTrue = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderIsInfoTrue),
      delay(500),
      map(ac => {
        return {
          type: RDX_ORDER_IS_TICKETTYPES_TRUE
        }
      })
    )
  })
  slideOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderSlideOne),
      delay(1),
      map(ac => {
        if (ac.direction == 'left') {
          return {
            type: RDX_ORDER_SLIDE_TWO,
            direction: 'right-absolute'
          }
        } else {
          return {
            type: RDX_ORDER_SLIDE_TWO,
            direction: 'left-absolute'
          }
        }
      }))
  })
  slideTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderSlideTwo),
      delay(500),
      map(ac => {
        return {
          type: RDX_ORDER_SLIDE_THREE,
        }
      })
    )
  })
  fetchOrAdjustCart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderFetchOrAdjustCart),
      withLatestFrom(this.store.select(getOrderIsCartFetched)),
      map(ac => {
        if (ac[1]) {
          return {
            type: RDX_ORDER_ADJUST_CART,
            quantity: ac[0].quantity
          }
        } else {
          return {
            type: RDX_ORDER_FETCH_CART,
            quantity: ac[0].quantity
          }
        }
      })
    )
  })
  adjustCart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderAdjustCart),
      withLatestFrom(this.store.select(getOrderRecognition), this.store.select(getOrderTickettype)),
      switchMap(ac => aschax.post('/api/adjust-cart/' + ac[1], {
        ticket_id:  ac[2].id,
        quantity: ac[0].quantity
      }).then(res => {
        return {
          type: RDX_ORDER_ADJUST_CART_SUCCESS
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_ORDER_FETCH_CART_ERROR,
          error: err.response?.data
        }
      }))
    )
  })

  fetchCart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOrderFetchCart),
      withLatestFrom(this.store.select(getOrderTickettype)),
      switchMap(ac => aschax.post('/api/create-cart', {
        ticket_id: ac[1].id,
        quantity: ac[0].quantity
      }).then(res => {
        return {
          type: RDX_ORDER_FETCH_CART_SUCCESS,
          recognition: res.data.recognition
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_ORDER_FETCH_CART_ERROR,
          error: err.response?.data
        }
      }))
    )
  })

}
