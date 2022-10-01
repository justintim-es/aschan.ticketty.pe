import { createAction, props } from '@ngrx/store';
export const RDX_REDEEM_FETCH = 'RDX_REDEEM_FETCH';
export const rdxRedeemFetch = createAction(
  RDX_REDEEM_FETCH,
  props<{ id: number, old_recognition: string }>()
)
export const RDX_REDEEM_FETCH_SUCCESS = 'RDX_REDEEM_FETCH_SUCCESS';
export const rdxRedeemFetchSuccess = createAction(
  RDX_REDEEM_FETCH_SUCCESS,
  props<{ new_recognition: string }>()
)
