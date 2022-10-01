import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICheckoutReducer } from "./reducer";

const getCheckoutFeatureState = createFeatureSelector<ICheckoutReducer>('checkoutReducer');

export const getCheckoutIsCurtainOpen = createSelector(
  getCheckoutFeatureState,
  state => state.isCurtainOpen
)
export const getCheckoutIsFetch = createSelector(
    getCheckoutFeatureState,
    state => state.isFetch
)
export const getCheckoutIsFetchSuccess = createSelector(
    getCheckoutFeatureState,
    state => state.isFetchSuccess
)
export const getCheckoutIsFetchError = createSelector(
  getCheckoutFeatureState,
  state => state.isFetchError
)
export const getCheckoutFetchError = createSelector(
  getCheckoutFeatureState,
  state => state.fetchError
)
export const getCheckoutItems = createSelector(
  getCheckoutFeatureState,
  state => state.items
)
export const getCheckoutTotalPrice = createSelector(
  getCheckoutFeatureState,
  state => state.total_price
)
export const getCheckoutUrl = createSelector(
  getCheckoutFeatureState,
  state => state.url
)
export const getCheckoutCart = createSelector(
  getCheckoutFeatureState,
  state => state.cart
)
export const getCheckoutIsRouteBack = createSelector(
  getCheckoutFeatureState,
  state => state.isRouteBack
)
