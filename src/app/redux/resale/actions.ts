import { createAction, props } from '@ngrx/store';
import { ITicket, IEvent } from './reducer';
export const RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER = 'RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER';
export const rdxResaleIsCurtainOpenTrueTrigger = createAction(
  RDX_RESALE_IS_CURTAIN_OPEN_TRUE_TRIGGER,
)
export const RDX_RESALE_IS_CURTAIN_OPEN_TRUE = 'RDX_RESALE_IS_CURTAIN_OPEN_TRUE';
export const rdxResaleIsCurtainOpenTrue = createAction(
  RDX_RESALE_IS_CURTAIN_OPEN_TRUE,
)
export const RDX_RESALE_FETCH = 'RDX_RESALE_FETCH';
export const rdxResaleFetch = createAction(
  RDX_RESALE_FETCH,
  props<{ event: number }>()
)
export const RDX_RESALE_FETCH_SUCCESS = 'RDX_RESALE_FETCH_SUCCESS';
export const rdxResaleFetchSuccess = createAction(
  RDX_RESALE_FETCH_SUCCESS,
  props<{ tickets: ITicket[], event: IEvent }>()
)
export const RDX_RESALE_CREATE_CART = 'RDX_RESALE_CREATE_CART';
export const rdxResaleCreateCart = createAction(
  RDX_RESALE_CREATE_CART,
  props<{ id: number }>()
)
export const RDX_RESALE_CREATE_CART_SUCCESS = 'RDX_RESALE_CREATE_CART_SUCCESS';
export const rdxResaleCreateCartSuccess = createAction(
  RDX_RESALE_CREATE_CART_SUCCESS,
  props<{ recognition: string }>()
)
