import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from '../aschax';
import { switchMap } from 'rxjs/operators';
import { RDX_RESALE_SUCCESS_FETCH_SUCCESS, rdxResaleSuccessFetch } from './actions';
@Injectable({
  providedIn: 'root'
})
export class ResaleSuccessService {

  constructor(
    private actions: Actions
  ) { }

  // fetch = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(rdxResaleSuccessFetch),
  //     switchMap(ac => aschax.post(`/api/resale/${ac.event}/${ac.id}`).then(res => {
  //       return {
  //         type: RDX_RESALE_SUCCESS_FETCH_SUCCESS,
  //         recognition: res.data.recognition
  //       }
  //     }))
  //   )
  // })
}
