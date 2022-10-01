import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { aschax } from  '../aschax';
import { rdxTicketsSellFetch, RDX_TICKETS_SELL_FETCH_SUCCESS } from './actions';
@Injectable({
  providedIn: 'root'
})
export class TicketsSellService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxTicketsSellFetch),
      switchMap(ac => aschax.post(`/api/tickets/sell/${ac.event}/${ac.recognition}/${ac.value}`, {
        price: ac.price
      }).then(res => {
        return {
          type: RDX_TICKETS_SELL_FETCH_SUCCESS
        }
      }))
    )
  })
}
