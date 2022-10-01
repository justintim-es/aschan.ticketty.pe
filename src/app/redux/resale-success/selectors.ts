import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResaleSuccessReducer } from './reducer';
const getResaleSuccessFeatureState = createFeatureSelector<IResaleSuccessReducer>('resaleSuccessReducer');

export const getResaleSuccessIsFetch = createSelector(
  getResaleSuccessFeatureState,
  state => state.isFetch
)
export const getResaleSuccessIsFetchSuccess = createSelector(
  getResaleSuccessFeatureState,
  state => state.isFetchSuccess
)

export const getResaleSuccessRecognition = createSelector(
  getResaleSuccessFeatureState,
  state => state.recognition
)
