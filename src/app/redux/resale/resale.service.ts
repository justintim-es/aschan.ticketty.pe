import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { delay, map, switchMap } from 'rxjs/operators';
import { rdxResaleIsCurtainOpenTrueTrigger, RDX_RESALE_IS_CURTAIN_OPEN_TRUE, rdxResaleFetch, RDX_RESALE_FETCH_SUCCESS, RDX_RESALE_CREATE_CART_SUCCESS, rdxResaleCreateCartSuccess, rdxResaleCreateCart } from './actions';
import { aschax } from '../aschax';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ResaleService {

  constructor(
    private actions: Actions
  ) { }

  isCurtainOpenTrueTrigger = createEffect(() => {
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
      ofType(rdxResaleFetch),
      switchMap(ac => axios.all([
        aschax.get('/api/resale/' + ac.event),
        aschax.get('/api/event/' + ac.event)
      ]).then(res => {
        console.log(res[0].data)
        return {
          type: RDX_RESALE_FETCH_SUCCESS,
          tickets: res[0].data,
          event: res[1].data.party
        }
      }))
    )
  })
  createCart = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxResaleCreateCart),
      switchMap(ac => aschax.post('/api/resale/reserve/' + ac.id).then(res => {
        return {
          type: RDX_RESALE_CREATE_CART_SUCCESS,
          recognition: res.data
        }
      }))
    )
  })
}
