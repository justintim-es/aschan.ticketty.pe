import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResaleReducer } from './reducer';
const getResaleFeatureState = createFeatureSelector<IResaleReducer>('resaleReducer');

export const getResaleIsCurtainOpen = createSelector(
  getResaleFeatureState,
  state => state.isCurtainOpen
)
export const getResaleIsFetch = createSelector(
  getResaleFeatureState,
  state => state.isFetch
)
export const getResaleIsFetchSuccess = createSelector(
  getResaleFeatureState,
  state => state.isFetchSuccess
)
export const getResaleTickets = createSelector(
  getResaleFeatureState,
  state => state.tickets
)
export const getResaleEvent = createSelector(
  getResaleFeatureState,
  state => state.event
)
export const getResaleRecognition = createSelector(
  getResaleFeatureState,
  state => state.recognition
)
export const getResaleIsFetchCart = createSelector(
  getResaleFeatureState,
  state => state.isFetchCart
)
export const getResaleIsFetchCartSuccess = createSelector(
  getResaleFeatureState,
  state => state.isFetchCartSuccess
)
