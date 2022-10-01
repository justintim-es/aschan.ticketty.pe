import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITicketsReducer } from './reducer';
export const getTicketsFeatureState = createFeatureSelector<ITicketsReducer>('ticketsReducer');
export const getTicketsIsCurtainOpen = createSelector(
  getTicketsFeatureState,
  state => state.isCurtainOpen
)
export const getTicketsIsFetch = createSelector(
  getTicketsFeatureState,
  state => state.isFetch
)
export const getTicketsIsFetchSuccess = createSelector(
  getTicketsFeatureState,
  state => state.isFetchSuccess
)
export const getTicketsTickets = createSelector(
  getTicketsFeatureState,
  state => state.tickets
)
export const getTicketsIndex = createSelector(
  getTicketsFeatureState,
  state => state.index
)
export const getTicketsTopState = createSelector(
  getTicketsFeatureState,
  state => state.topState
)
export const getTicketsBottomState = createSelector(
  getTicketsFeatureState,
  state => state.bottomState
)
export const getTicketsIsTop = createSelector(
  getTicketsFeatureState,
  state => state.isTop
)
export const getTicketsIsBottom = createSelector(
  getTicketsFeatureState,
  state => state.isBottom
)
export const getTicketsTicket = createSelector(
  getTicketsFeatureState,
  getTicketsIndex, (state, ticketIndex) => state.tickets[ticketIndex]
)
export const getTicketsBottomIndex = createSelector(
  getTicketsFeatureState,
  state => state.bottomIndex
)
export const getTicketsBottomTicket = createSelector(
  getTicketsFeatureState,
  getTicketsBottomIndex, (state, bottomIndex) => state.tickets[bottomIndex]
)
export const getTicketsIsOnboard = createSelector(
  getTicketsFeatureState,
  state => state.isOnboard
)
export const getTicketsIsOnboardSuccess = createSelector(
  getTicketsFeatureState,
  state => state.isOnboardSuccess
)
export const getTicketsLink = createSelector(
  getTicketsFeatureState,
  state => state.link
)
export const getTicketsIsCancel = createSelector(
  getTicketsFeatureState,
  state => state.isCancel
)
export const getTicketsIsOnboarded = createSelector(
  getTicketsFeatureState,
  state => state.isOnboarded
)
export const getTicketsTicketValue = createSelector(
  getTicketsFeatureState,
  getTicketsIndex,
  (state, index) => state.tickets[index]?.value
)
