import { createReducer, on } from '@ngrx/store';
import { rdxCreateFetch, rdxCreateFetchSuccess } from './actions';
export interface ICreateReducer {
  isFetchSuccess: boolean;
}
export const createInitial: ICreateReducer = {
  isFetchSuccess: false
}
export const ccreateReducer = createReducer(
  createInitial,
  on(rdxCreateFetchSuccess, (state: ICreateReducer) => {
    return {
      ...state,
      isFetchSuccess: true
    }
  })
)
