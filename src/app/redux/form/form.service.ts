import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, delay, withLatestFrom } from 'rxjs/operators';
import { aschax } from '../aschax';
import { RDX_FORM_FETCH_SUCCESS, RDX_FORM_COLLECT, rdxFormCollect, rdxFormCollectFetch, RDX_FORM_COLLECT_FETCH, rdxFormFetch, rdxFormIsCurtainOpenTrueTrigger, RDX_FORM_IS_CURTAIN_OPEN_TRUE, RDX_FORM_COLLECT_FETCH_SUCCESS } from './actions';
import { getFormCustoms } from 'src/app/redux/form/selectors';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }
  curtainOpenTrue = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxFormIsCurtainOpenTrueTrigger),
      delay(1000),
      map(ac => {
        return {
          type: RDX_FORM_IS_CURTAIN_OPEN_TRUE
        }
      })
    )
  })
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxFormFetch),
      switchMap(ac => aschax.get('/api/questions/' + ac.event_id).then(res => {
        return {
          type: RDX_FORM_FETCH_SUCCESS,
          questions: res.data
        }
      }))
    );
  })
  collect = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxFormCollect),
      delay(1000),
      map(ac => {
        return {
          type: RDX_FORM_COLLECT_FETCH,
          recognition: ac.recognition,
          email: ac.email
        }
      })
    )
  })
  collectFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxFormCollectFetch),
      withLatestFrom(this.store.select(getFormCustoms)),
      switchMap(ac => aschax.post('/api/form/' + ac[0].recognition, {
        email: ac[0].email,
        customs: ac[1]
      }).then(res => {
        return {
          type: RDX_FORM_COLLECT_FETCH_SUCCESS
        }
      }))
    )
  })
}
