import { props, createAction } from '@ngrx/store';
export const RDX_CREATE_FETCH = 'RDX_CREATE_FETCH';
export const rdxCreateFetch = createAction(
  RDX_CREATE_FETCH,
  props<{ event: number, recognition: string }>()
)

export const RDX_CREATE_FETCH_SUCCESS = 'RDX_CREATE_FETCH_SUCCESS';
export const rdxCreateFetchSuccess = createAction(
  RDX_CREATE_FETCH_SUCCESS
)
