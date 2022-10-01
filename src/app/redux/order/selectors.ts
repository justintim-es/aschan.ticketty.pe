import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOrderReducer } from "./reducer";

const getOrderFeatureSelector = createFeatureSelector<IOrderReducer>('orderReducer')

export const getOrderIsFetchEvent = createSelector(
    getOrderFeatureSelector,
    state => state.isFetchEvent
)
export const getOrderIsFetchEventSuccess = createSelector(
    getOrderFeatureSelector,
    state => state.isFetchEventSuccess
)
export const getOrderIsCurtainOpen = createSelector(
    getOrderFeatureSelector,
    state => state.isCurtainOpen
)
export const getOrderEvent = createSelector(
    getOrderFeatureSelector,
    state => state.event
)
export const getOrderIsInfo = createSelector(
    getOrderFeatureSelector,
    state => state.isInfo
)
export const getOrderSold = createSelector(
    getOrderFeatureSelector,
    state => state.sold
)
export const getOrderLeft = createSelector(
    getOrderFeatureSelector,
    state => state.left
)
export const getOrderIsTickettypes = createSelector(
    getOrderFeatureSelector,
    state => state.isTickettypes
)
export const getOrderTickettypes = createSelector(
    getOrderFeatureSelector,
    state => state.tickettypes
)
export const getOrderTickettypeIndex = createSelector(
    getOrderFeatureSelector,
    state => state.ticketTypeIndex
)
export const getOrderTickettype = createSelector(
    getOrderTickettypes,
    getOrderTickettypeIndex, (tickettypes, index) => tickettypes[index]
)
export const getOrderTickettypeBottom = createSelector(
    getOrderTickettypes,
    getOrderTickettypeIndex, (tickettypes, index) => tickettypes[index+1] ? tickettypes[index+1] : tickettypes[index]
)
export const getOrderTopState = createSelector(
    getOrderFeatureSelector,
    state => state.topState
)
export const getOrderBottomState = createSelector(
    getOrderFeatureSelector,
    state => state.bottomState
)
export const getOrderIsTop = createSelector(
    getOrderFeatureSelector,
    state => state.isTop
)
export const getOrderIsBottom = createSelector(
    getOrderFeatureSelector,
    state => state.isBottom
)
export const getOrderRecognition = createSelector(
    getOrderFeatureSelector,
    state => state.recognition
)
export const getOrderIsCartFetch = createSelector(
    getOrderFeatureSelector,
    state => state.isCartFetch
)
export const getOrderIsCartFetchSuccess = createSelector(
    getOrderFeatureSelector,
    state => state.isCartFetchSuccess
)
export const getOrderIsCartFetched = createSelector(
  getOrderFeatureSelector,
  state => state.isCartFetched
)
export const getOrderIsCartFetchError = createSelector(
  getOrderFeatureSelector,
  state => state.isCartFetchError
)
export const getOrderCartFetchError = createSelector(
  getOrderFeatureSelector,
  state => state.cartFetchError
)
