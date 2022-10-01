import { createReducer, on } from '@ngrx/store';
import { List } from 'immutable';
import { rdxFormCollect, rdxFormCollectFetchSuccess, rdxFormPush, rdxFormFetch, rdxFormFetchSuccess, rdxFormIsCurtainOpenTrue } from './actions';
export interface IQuestion {
  question: string;
}
export interface ICustom {
  question: string;
  value: string;
}
export interface IFormReducer {
  isCurtainOpen: boolean;
  isFetch: boolean;
  isFetchSuccess: boolean;
  questions: IQuestion[];
  isGrab: boolean;
  customs: List<ICustom>;
  counter: number;
  isFetchForm: boolean;
  isFetchFormSuccess: boolean;
}
export const formInitial: IFormReducer = {
  isCurtainOpen: false,
  isFetch: false,
  isFetchSuccess: false,
  questions: [],
  isGrab: false,
  customs: List([]),
  counter: 0,
  isFetchForm: false,
  isFetchFormSuccess: false
}
export const formReducer = createReducer(
  formInitial,
  on(rdxFormIsCurtainOpenTrue, (state: IFormReducer) => {
    return {
      ...state,
      isCurtainOpen: true
    };
  }),
  on(rdxFormFetch, (state: IFormReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false
    }
  }),
  on(rdxFormFetchSuccess, (state: IFormReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      questions: action.questions
    }
  }),
  on(rdxFormCollect, (state: IFormReducer, action) => {
    return {
      ...state,
      isGrab: true,
      isFetchForm: true,
      isFetchFormSuccess: false
    }
  }),
  on(rdxFormPush, (state: IFormReducer, action) => {
      return {
        ...state,
        isFetchForm: false,
        isFetchFormSuccess: true,
        customs: state.customs.push(action.payload)
      }
  }),
  on(rdxFormCollectFetchSuccess, (state: IFormReducer) => {
    return {
      ...state,
      isFetchForm: false,
      isFetchFormSuccess: true
    }
  })
)
