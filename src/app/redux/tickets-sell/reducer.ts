import { rdxTicketsSellFetch, rdxTicketsSellFetchSuccess, rdxTicketSellReset } from './actions';
import { on, createReducer } from '@ngrx/store';
export interface ITicketsSellReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
}
export const ticketsSellInitial: ITicketsSellReducer = {
  isFetch: false,
  isFetchSuccess: false
}
export const ticketsSellReducer = createReducer(
  ticketsSellInitial,
  on(rdxTicketsSellFetch, (state: ITicketsSellReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false
    }
  }),
  on(rdxTicketsSellFetchSuccess, (state: ITicketsSellReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxTicketSellReset, (state: ITicketsSellReducer) => {
    return ticketsSellInitial;
  })
)
