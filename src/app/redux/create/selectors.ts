import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICreateReducer } from './reducer';
const getCreateFeatureState = createFeatureSelector<ICreateReducer>('ccreateReducer');

export const getCreateIsFetchSuccess = createSelector(
  getCreateFeatureState,
  state => state.isFetchSuccess
)
