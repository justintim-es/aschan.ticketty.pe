import { createAction, props } from '@ngrx/store';
export const RDX_TICKETS_SELL_FETCH  = 'RDX_TICKETS_SELL_FETCH';
export const rdxTicketsSellFetch = createAction(
  RDX_TICKETS_SELL_FETCH,
  props<{ price: number, value: number, event: number, recognition: string }>()
)
export const RDX_TICKETS_SELL_FETCH_SUCCESS = 'RDX_TICKETS_SELL_FETCH_SUCCESS';
export const rdxTicketsSellFetchSuccess = createAction(
  RDX_TICKETS_SELL_FETCH_SUCCESS,
)
export const RDX_TICKETS_SELL_RESET  = 'RDX_TICKETS_SELL_RESET';
export const rdxTicketSellReset = createAction(
  RDX_TICKETS_SELL_RESET
)
