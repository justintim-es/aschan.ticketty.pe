import { createAction, props } from "@ngrx/store";
import { IEvent, ITickettype } from "./reducer";

export const RDX_ORDER_FETCH_EVENT = 'RDX_ORDER_FETCH_EVENT';
export const rdxOrderFetchEvent = createAction(
    RDX_ORDER_FETCH_EVENT,
    props<{ id: number }>()
)
export const RDX_ORDER_FETCH_EVENT_SUCCESS = 'RDX_ORDER_FETCH_EVENT_SUCCESS';
export const rdxOrderFetchEventSuccess = createAction(
    RDX_ORDER_FETCH_EVENT_SUCCESS,
    props<{ party: IEvent, sold: number, tickettypes: ITickettype[] }>()
)
export const RDX_ORDER_IS_CURTAIN_OPEN_TRUE  = 'RDX_ORDER_CURTAIN_OPEN_TRUE';
export const rdxOrderIsCurtainOpenTrue = createAction(
    RDX_ORDER_IS_CURTAIN_OPEN_TRUE
)
export const RDX_ORDER_IS_INFO_TRUE = 'RDX_ORDER_IS_INFO_TRUE';
export const rdxOrderIsInfoTrue = createAction(
    RDX_ORDER_IS_INFO_TRUE
)
export const RDX_ORDER_IS_TICKETTYPES_TRUE = 'RDX_ORDER_IS_TICKETTYPES_TRUE';
export const rdxOrderIsTickettypesTrue = createAction(
    RDX_ORDER_IS_TICKETTYPES_TRUE
)
export const RDX_ORDER_SLIDE_ONE = 'RDX_ORDER_SLIDE_ONE';
export const rdxOrderSlideOne = createAction(
    RDX_ORDER_SLIDE_ONE,
    props<{ direction: string }>()
)
export const RDX_ORDER_SLIDE_TWO = 'RDX_ORDER_SLIDE_TWO';
export const rdxOrderSlideTwo = createAction(
    RDX_ORDER_SLIDE_TWO,
    props<{ direction: string }>()
)
export const RDX_ORDER_SLIDE_THREE =  'RDX_ORDER_SLIDE_THREE';
export const rdxOrderSlideThree = createAction(
    RDX_ORDER_SLIDE_THREE
)
export const RDX_ORDER_FETCH_OR_ADJUST_CART = 'RDX_ORDER_FETCH_OR_ADJUST_CART';
export const rdxOrderFetchOrAdjustCart = createAction(
    RDX_ORDER_FETCH_OR_ADJUST_CART,
    props<{ quantity: number}>()
)
export const RDX_ORDER_FETCH_CART = 'RDX_ORDER_FETCH_CART';
export const rdxOrderFetchCart = createAction(
  RDX_ORDER_FETCH_CART,
  props<{ quantity: number }>()
)
export const RDX_ORDER_ADJUST_CART = 'RDX_ORDER_ADJUST_CART';
export const rdxOrderAdjustCart = createAction(
  RDX_ORDER_ADJUST_CART,
  props<{ quantity: number }>()
)
export const RDX_ORDER_FETCH_CART_SUCCESS = 'RDX_ORDER_FETCH_CART_SUCCESS';
export const rdxOrderFetchCartSuccess = createAction(
    RDX_ORDER_FETCH_CART_SUCCESS,
    props<{ recognition: string }>()
)
export const RDX_ORDER_FETCH_CART_ERROR = 'RDX_ORDER_FETCH_CART_ERROR';
export const rdxOrderFetchCartError = createAction(
    RDX_ORDER_FETCH_CART_ERROR,
    props<{ error: any }>()

)

export const RDX_ORDER_ADJUST_CART_SUCCESS = 'RDX_ORDER_ADJUST_CART_SUCCESS';
export const rdxOrderAdjustCartSuccess = createAction(
    RDX_ORDER_ADJUST_CART_SUCCESS,
)
export const RDX_ORDER_CART_ERROR = 'RDX_ORDER_CART_ERROR';
export const rdxOrderCartError = createAction(
  RDX_ORDER_CART_ERROR,
  props<{ error: any }>()
)
