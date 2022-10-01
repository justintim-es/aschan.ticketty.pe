import { createAction, props } from '@ngrx/store';
export const RDX_RESALE_SUCCESS_FETCH = 'RDX_RESALE_FETCH_SUCCESS';
export const rdxResaleSuccessFetch = createAction(
  RDX_RESALE_SUCCESS_FETCH,
  props<{ event: number, id: string }>()
)
export const RDX_RESALE_SUCCESS_FETCH_SUCCESS = 'RDX_RESALE_SUCCESS_FETCH_SUCCESS';
export const rdxResaleSuccessFetchSuccess = createAction(
  RDX_RESALE_SUCCESS_FETCH_SUCCESS,
  props<{ recognition: string }>()
)
