import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from '../aschax';
import { rdxCreateFetch, RDX_CREATE_FETCH_SUCCESS } from './actions';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCreateFetch),
      switchMap(ac => aschax.post(`/api/create/${ac.event}/${ac.recognition}`).then(res => {
        return {
          type : RDX_CREATE_FETCH_SUCCESS,
        }
      }))
    )
  })
}
