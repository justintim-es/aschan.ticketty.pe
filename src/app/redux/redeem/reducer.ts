import { createReducer, on } from '@ngrx/store';
import { rdxRedeemFetchSuccess, rdxRedeemFetch } from './actions';
export interface IRedeemReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  recognition: string;
}
export const redeemInitial: IRedeemReducer = {
  isFetch: false,
  isFetchSuccess: false,
  recognition: ''
}
export const redeemReducer = createReducer(
  redeemInitial,
  on(rdxRedeemFetch, (state: IRedeemReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      recognition: ''
    }
  }),
  on(rdxRedeemFetchSuccess, (state: IRedeemReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      recognition: action.new_recognition
    }
  })
)
