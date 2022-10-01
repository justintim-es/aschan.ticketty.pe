import { createReducer, on } from '@ngrx/store';
import {rdxResaleFetch, rdxResaleFetchSuccess, rdxResaleIsCurtainOpenTrue, rdxResaleCreateCart, rdxResaleCreateCartSuccess } from './actions';
export interface IEvent {
    address_one: string;
    address_two: string;
    date_end: string;
    date_start: string;
    name: string
    share_stats: boolean;
    time_end: string;
    time_start: string;
    venue: string;
    city: string;
    capacity?: number;
}
export interface IResale {
  id: number;
  price: number;
  is_resold: boolean;
  link: string;
  session: string;
  reserved: boolean;
  date_reserved: string;
}

export interface ITicket {
  resale_id: number;
  ticket_name: string;
  price: number;
  link: string;
  resale: IResale;
}
export interface IResaleReducer {
  isCurtainOpen: boolean,
  isFetch: boolean;
  isFetchSuccess: boolean;
  tickets: ITicket[];
  event?: IEvent | null;
  isFetchCart: boolean;
  isFetchCartSuccess: boolean;
  recognition: string;
}
export const resaleInitial: IResaleReducer = {
  isCurtainOpen: false,
  isFetch: false,
  isFetchSuccess: false,
  tickets: [],
  event: null,
  isFetchCart: false,
  isFetchCartSuccess: false,
  recognition: ''
}

export const resaleReducer = createReducer(
  resaleInitial,
  on(rdxResaleIsCurtainOpenTrue, (state: IResaleReducer) => {
    return {
      ...state,
      isCurtainOpen: true,
    }
  }),
  on(rdxResaleFetch, (state: IResaleReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false
    }
  }),
  on(rdxResaleFetchSuccess, (state: IResaleReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      tickets: action.tickets,
      event: action.event
    }
  }),
  on(rdxResaleCreateCart, (state: IResaleReducer, action) => {
    return {
      ...state,
      isFetchCart: true,
      isFetchCartSuccess: false,
    }
  }),
  on(rdxResaleCreateCartSuccess, (state: IResaleReducer, action) => {
    return {
      ...state,
      isFetchCart: false,
      isFetchCartSuccess: true,
      recognition: action.recognition
    }
  })
)
