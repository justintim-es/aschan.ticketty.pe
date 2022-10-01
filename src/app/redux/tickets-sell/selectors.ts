import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ITicketsSellReducer } from './reducer';
const getTicketsSellFeatureState = createFeatureSelector<ITicketsSellReducer>('ticketsSellReducer');

export const getTicketsSellIsFetch = createSelector(
  getTicketsSellFeatureState,
  state => state.isFetch
)
export const getTicketsSellIsFetchSuccess = createSelector(
  getTicketsSellFeatureState,
  state => state.isFetchSuccess
)
