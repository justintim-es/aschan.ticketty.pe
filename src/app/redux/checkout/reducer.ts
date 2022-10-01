import { createReducer, on } from "@ngrx/store";
import { rdxCheckoutIsCurtainOpenTrue, rdxCheckoutFetch, rdxCheckoutFetchSuccess, rdxCheckoutFetchError, rdxCheckoutRouteBack } from './actions';
export interface ICart {
  email: string;
  form: any;
}
export interface ICartItem {
  ticket_name: string;
  quantity: number;
  price: number;
}
export interface ICheckoutReducer {
  isCurtainOpen: boolean;
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchError: any;
  items: ICartItem[];
  total_price: number;
  url: string;
  cart: ICart;
  isRouteBack: boolean;
}
export const checkoutInitial: ICheckoutReducer = {
  isCurtainOpen: false,
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: null,
  items: [],
  total_price: 0,
  url: '',
  cart: {
    email: '',
    form: null
  },
  isRouteBack: false
}
export const checkoutReducer = createReducer(
    checkoutInitial,
    on(rdxCheckoutIsCurtainOpenTrue, (state: ICheckoutReducer) => {
      return {
        ...state,
        isCurtainOpen: true
      }
    }),
    on(rdxCheckoutFetch, (state: ICheckoutReducer) => {
      return {
        ...state,
        isFetch: true,
        isFetchSuccess: false,
        isFetchError: false,
        fetchError: null,
      }
    }),
    on(rdxCheckoutFetchSuccess, (state: ICheckoutReducer, action) => {
      return {
        ...state,
        isFetch: false,
        isFetchSuccess: true,
        items: action.items,
        total_price: action.total_price,
        url: action.url,
        cart: action.cart
      }
    }),
    on(rdxCheckoutFetchError, (state: ICheckoutReducer, action) => {
      return {
        ...state,
        isFetch: false,
        isFetchError: true,
        fetchError: action.error
      }
    }),
    on(rdxCheckoutRouteBack, (state: ICheckoutReducer) => {
      return {
        ...state,
        isRouteBack: true
      }
    })
)
