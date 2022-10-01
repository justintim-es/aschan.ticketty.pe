import { createAction, props } from '@ngrx/store';
import { ICartItem, ICart } from './reducer';
export const RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE_TRIGGER = 'RDX_CHECKOUT_IS_CURTIN_OPEN_TRUE_TRIGGER';
export const rdxCheckoutIsCurtainOpenTrueTrigger = createAction(
  RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE_TRIGGER
)
export const RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE = 'RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE';
export const rdxCheckoutIsCurtainOpenTrue = createAction(
  RDX_CHECKOUT_IS_CURTAIN_OPEN_TRUE
)

export const RDX_CHECKOUT_FETCH  = 'RDX_CHECKOUT_FETCH';
export const rdxCheckoutFetch = createAction(
  RDX_CHECKOUT_FETCH,
  props<{ recognition: string, event: number }>()
)
export const RDX_CHECKOUT_FETCH_SUCCESS = 'RDX_CHECKOUT_FETCH_SUCCESS';
export const rdxCheckoutFetchSuccess = createAction(
  RDX_CHECKOUT_FETCH_SUCCESS,
  props<{ items: ICartItem[], total_price: number, url: string, cart: ICart }>()
)
export const RDX_CHECKOUT_FETCH_ERROR = 'RDX_CHECKOUT_FETCH_ERROR';
export const rdxCheckoutFetchError = createAction(
  RDX_CHECKOUT_FETCH_ERROR,
  props<{ error: any }>()
)
export const RDX_CHECKOUT_ROUTE_BACK = 'RDX_CHECKOUT_ROUTE_BACK';
export const rdxCheckoutRouteBack = createAction(
  RDX_CHECKOUT_ROUTE_BACK,
)
