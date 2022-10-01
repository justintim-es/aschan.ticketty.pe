import { createReducer, on } from '@ngrx/store';
import {rdxResaleCheckoutFetch, rdxResaleIsCurtainOpenTrue, rdxResaleCheckoutFetchSuccess } from './actions';
export interface IResale {
  id: number;
  price:number;
  is_resold: boolean;
  link: string;
  session: string;
  reserved: boolean;
  date_reserved: string;
}
export interface ITicket {
  id: number;
  party_id: number;
  cart_id: number;
  ticket_name: string;
  resale: IResale;
}
export interface ICart {
  email: string;
  form: any;
}
export interface IResaleCheckoutReducer {
  isCurtainOpen: boolean;
  isFetch: boolean;
  isFetchSuccess: boolean;
  ticket: ITicket;
  cart: ICart;
}
export const resaleCheckoutInitial: IResaleCheckoutReducer = {
  isCurtainOpen: false,
  isFetch: false,
  isFetchSuccess: false,
  ticket: {
    id: 0,
    party_id: 0,
    cart_id: 0,
    ticket_name: '',
    resale: {
      id: 0,
      price: 0,
      is_resold: false,
      link: '',
      session: '',
      reserved: false,
      date_reserved: ''
    }
  },
  cart: {
    email: '',
    form: null
  }
}
export const resaleCheckoutReducer = createReducer(
  resaleCheckoutInitial,
  on(rdxResaleIsCurtainOpenTrue, (state: IResaleCheckoutReducer) => {
    return {
      ...state,
      isCurtainOpen: true
    }
  }),
  on(rdxResaleCheckoutFetch, (state: IResaleCheckoutReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      url: ''
    }
  }),
  on(rdxResaleCheckoutFetchSuccess, (state: IResaleCheckoutReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      ticket: action.ticket,
      cart: action.cart
    }
  })
)
