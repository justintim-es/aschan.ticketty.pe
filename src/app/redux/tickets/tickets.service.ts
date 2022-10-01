import { Injectable } from '@angular/core';
import { aschax } from '../aschax';
import { rdxTicketsFetch, RDX_TICKETS_FETCH_SUCCESS, rdxTicketsOpenTrigger, RDX_TICKETS_OPEN, rdxTicketsSlideOne, RDX_TICKETS_SLIDE_TWO, rdxTicketsSlideTwo, RDX_TICKETS_SLIDE_THREE, rdxTicketsOnboard, RDX_TICKETS_ONBOARD_SUCCESS, rdxTicketsResaleCancel, RDX_TICKETS_RESALE_CANCEL_SUCCESS, rdxTicketsResaleCancelSuccess, RDX_TICKETS_FETCH, RDX_TICKETS_ISONBOARDED } from './actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, delay, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getTicketsTicket } from './selectors';
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(
    private store: Store,
    private actions: Actions
  ) {
  }
  openTrigger = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsOpenTrigger),
      delay(1000),
      map(ac => {
        return {
          type: RDX_TICKETS_OPEN
        }
      })
    )
  })
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsFetch),
      switchMap(ac => aschax.get('/api/tickets/' + ac.event + '/' + ac.recognition).then(res => {
        return {
          type: RDX_TICKETS_FETCH_SUCCESS,
          tickets: res.data
        }
      }))
    )
  })
  slideOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsSlideOne),
      delay(1),
      map(ac => {
        if(ac.left) {
          return {
            type: RDX_TICKETS_SLIDE_TWO,
            topState: 'right-absolute'
          }
        } else {
          return {
            type: RDX_TICKETS_SLIDE_TWO,
            topState: 'left-absolute'
          }
        }
      })
    )
  })
  slideTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsSlideTwo),
      delay(500),
      map(ac => {
        return {
          type: RDX_TICKETS_SLIDE_THREE
        }
      })
    )
  })
  onboard = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsOnboard),
      withLatestFrom(this.store.select(getTicketsTicket)),
      switchMap(ac => aschax.get(`/api/tickets/onboard/${ac[0].event}/${ac[1].value}/${ac[0].recognition}`).then(res => {
        if (res.status == 200) {
          return {
            type: RDX_TICKETS_ISONBOARDED,
          }
        } else {
          return {
            type: RDX_TICKETS_ONBOARD_SUCCESS,
            link: res.data.link
          }
        }

      }))
    )
  })
  cancel = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsResaleCancel),
      withLatestFrom(this.store.select(getTicketsTicket)),
      switchMap(ac => aschax.delete(`/api/resale/cancel/${ac[1].resale.id}`).then(res => {
        return {
          type: RDX_TICKETS_RESALE_CANCEL_SUCCESS,
          event: ac[0].event,
          recognition: ac[0].recognition
        }
      }))
    )
  })
  cancelSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsResaleCancelSuccess),
      map(ac => {
        return {
          type: RDX_TICKETS_FETCH,
          event: ac.event,
          recognition: ac.recognition
        }
      })
    )
  })
}
