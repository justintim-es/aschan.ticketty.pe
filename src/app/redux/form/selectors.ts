
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFormReducer } from './reducer';
const getFormFeatureSelector = createFeatureSelector<IFormReducer>('formReducer');

export const getFormIsCurtainOpen = createSelector(
  getFormFeatureSelector,
  state => state.isCurtainOpen
)
export const getFormIsFetch = createSelector(
  getFormFeatureSelector,
  state => state.isFetch
)
export const getFormIsFetchSuccess = createSelector(
  getFormFeatureSelector,
  state => state.isFetchSuccess
)

export const getFormQuestions = createSelector(
  getFormFeatureSelector,
  state => state.questions
)

export const getFormIsGrab = createSelector(
  getFormFeatureSelector,
  state => state.isGrab
)
export const getFormCounter = createSelector(
  getFormFeatureSelector,
  state => state.counter
)
export const getFormCustoms = createSelector(
  getFormFeatureSelector,
  state => state.customs
)
export const getFormIsFetchForm = createSelector(
  getFormFeatureSelector,
  state => state.isFetchForm
)
export const getFormIsFetchFormSuccess = createSelector(
  getFormFeatureSelector,
  state => state.isFetchFormSuccess
)
