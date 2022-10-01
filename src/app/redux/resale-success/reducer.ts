import { on, createReducer } from '@ngrx/store';
import { rdxResaleSuccessFetch, rdxResaleSuccessFetchSuccess } from './actions';
export interface IResaleSuccessReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  recognition: string;
}
export const resaleSuccessInitial: IResaleSuccessReducer = {
  isFetch: false,
  isFetchSuccess: false,
  recognition: ''
}
export const resaleSuccessReducer = createReducer(
  resaleSuccessInitial,
  on(rdxResaleSuccessFetch, (state: IResaleSuccessReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false
    }
  }),
  on(rdxResaleSuccessFetchSuccess, (state: IResaleSuccessReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      recogntion: action.recognition
    }
  })
)
