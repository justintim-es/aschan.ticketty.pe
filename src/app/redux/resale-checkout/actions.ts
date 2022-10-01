import { createAction, props } from '@ngrx/store';
import { ITicket, ICart } from './reducer';
export const RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER = 'RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER';
export const rdxResaleIsCurtainOpenTrueTrigger = createAction(
  RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER
)
export const RDX_RESALE_IS_CURTAIN_OPEN_TRUE = 'RDX_RESALE_IS_CURTAIN_OPEN_TRUE';
export const rdxResaleIsCurtainOpenTrue = createAction(
  RDX_RESALE_IS_CURTAIN_OPEN_TRUE
)
export const RDX_RESALE_CHECKOUT_FETCH = 'RDX_RESALE_CHECKOUT_FETCH';
export const rdxResaleCheckoutFetch = createAction(
  RDX_RESALE_CHECKOUT_FETCH,
  props<{ resale: number, recognition: string }>()
)
export const RDX_RESALE_CHECKOUT_FETCH_SUCCESS =  'RDX_RESALE_CHECKOUT_FETCH_SUCCESS';
export const rdxResaleCheckoutFetchSuccess = createAction(
  RDX_RESALE_CHECKOUT_FETCH_SUCCESS,
  props<{ cart: ICart, ticket: ITicket  }>()
)
