import { createReducer, on } from '@ngrx/store';
import { rdxTicketsFetch, rdxTicketsFetchSuccess, rdxTicketsOpen, rdxTicketsSlideOne, rdxTicketsSlideTwo, rdxTicketsSlideThree, rdxTicketsOnboard, rdxTicketsOnboardSuccess, rdxTicketsResaleCancel, rdxTicketsResaleCancelSuccess, rdxTicketsIsonboarded, rdxTicketsReset } from './actions';

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
  id: number;
  value: string;
  party_id: number;
  cart_id: number;
  ticket_name: string;
  resale: IResale;
}
export interface ITicketsReducer {
  isCurtainOpen: boolean;
  isFetch: boolean;
  isFetchSuccess: boolean;
  tickets: ITicket[];
  index: number;
  topState: string;
  bottomState: string;
  isTop: boolean;
  isBottom: boolean;
  bottomIndex: number;
  isOnboard: boolean;
  isOnboardSuccess: boolean;
  link: string;
  isCancel: boolean;
  isOnboarded: boolean;
}
export const ticketsInitial: ITicketsReducer = {
  isCurtainOpen: false,
  isFetch: false,
  isFetchSuccess: false,
  tickets: [],
  index: 0,
  topState: '',
  bottomState: '',
  isTop: true,
  isBottom: false,
  bottomIndex: 0,
  isOnboard: false,
  isOnboardSuccess: false,
  link: '',
  isCancel: false,
  isOnboarded: false
}
export const ticketsReducer = createReducer(
    ticketsInitial,
    on(rdxTicketsOpen, (state: ITicketsReducer) => {
      return {
        ...state,
        isCurtainOpen: true
      }
    }),
    on(rdxTicketsFetch, (state: ITicketsReducer) => {
      return {
        ...state,
        isFetch: true,
        isFetchSuccess: false
      }
    }),
    on(rdxTicketsFetchSuccess, (state: ITicketsReducer, action) => {
      return {
        ...state,
        isFetch: false,
        isFetchSuccess: true,
        tickets: action.tickets
      }
    }),
    on(rdxTicketsSlideOne, (state: ITicketsReducer, action) => {
      return {
        ...state,
        topState: 'invision-absolute',
        bottomState: action.left ? 'left' : 'right' ,
        isBottom: true,
        bottomIndex:
        action.left ? ((state.index - 1 >= 0) ? state.index -1 : state.tickets.length-1) :
        ((state.index + 1) < state.tickets.length) ? state.index + 1 : 0
      }
    }),
    on(rdxTicketsSlideTwo, (state: ITicketsReducer, action) => {
      return {
        ...state,
        topState: action.topState,
        bottomState: 'invision',
        // index: state.bottomState == 'left' ? state.index + 1 : state.index - 1
      }
    }),
    on(rdxTicketsSlideThree, (state: ITicketsReducer, action) => {
      return {
        ...state,
        topState: 'invision',
        isBottom: false,
        index: state.bottomIndex
      }
    }),
    on(rdxTicketsOnboard, (state: ITicketsReducer) => {
      return {
        ...state,
        isOnboard: true,
        isOnboardSuccess: false
      }
    }),
    on(rdxTicketsOnboardSuccess, (state: ITicketsReducer, action) => {
      return {
        ...state,
        isOnboard: false,
        isOnboardSuccess: true,
        link: action.link
      }
    }),
    on(rdxTicketsIsonboarded, (state: ITicketsReducer) => {
      return {
        ...state,
        isOnboarded: true
      }
    }),
    on(rdxTicketsResaleCancel, (state: ITicketsReducer) => {
      return {
        ...state,
        isCancel: true
      }
    }),
    on(rdxTicketsResaleCancelSuccess, (state: ITicketsReducer) => {
      return {
        ...state,
        isCancel: false
      }
    }),
    on(rdxTicketsReset, (state: ITicketsReducer) => {
      return ticketsInitial
    })
)
