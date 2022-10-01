import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRedeemReducer } from './reducer';
const getRedeemFeatureState = createFeatureSelector<IRedeemReducer>('redeemReducer');

export const getRedeemIsFetch = createSelector(
  getRedeemFeatureState,
  state => state.isFetch
)
export const getRedeemIsFetchSuccess = createSelector(
  getRedeemFeatureState,
  state => state.isFetchSuccess
)
export const getRedeemRecognition = createSelector(
  getRedeemFeatureState,
  state => state.recognition
)
