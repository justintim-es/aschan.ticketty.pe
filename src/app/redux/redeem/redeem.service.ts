import { Injectable } from '@angular/core';
import { aschax } from  '../aschax';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { rdxRedeemFetch, RDX_REDEEM_FETCH_SUCCESS } from './actions';
@Injectable({
  providedIn: 'root'
})
export class RedeemService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRedeemFetch),
      switchMap(ac => aschax.get(`/api/resale/redeem/${ac.id}/${ac.old_recognition}`).then(res => {
        return {
          type: RDX_REDEEM_FETCH_SUCCESS,
          new_recognition: res.data.recognition
        }
      }))
    )
  })
}
