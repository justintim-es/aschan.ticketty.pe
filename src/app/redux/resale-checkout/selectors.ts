import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResaleCheckoutReducer } from './reducer';;
const getResaleCheckoutFeatureState = createFeatureSelector<IResaleCheckoutReducer>('resaleCheckoutReducer');
export const getResaleCheckoutIsCurtainOpen = createSelector(
  getResaleCheckoutFeatureState,
  state => state.isCurtainOpen
)
export const getResaleCheckoutIsFetch = createSelector(
  getResaleCheckoutFeatureState,
  state => state.isFetch
)
export const getResaleCheckoutIsFetchSuccess = createSelector(
  getResaleCheckoutFeatureState,
  state => state.isFetchSuccess
)
export const getResaleCheckoutTicket = createSelector(
  getResaleCheckoutFeatureState,
  state => state.ticket
)
export const getResaleCheckoutCart = createSelector(
  getResaleCheckoutFeatureState,
  state => state.cart
)
