import { createReducer, on } from "@ngrx/store";
import { rdxOrderFetchCartError, rdxOrderIsCurtainOpenTrue, rdxOrderFetchEvent, rdxOrderFetchEventSuccess, rdxOrderIsInfoTrue, rdxOrderIsTickettypesTrue, rdxOrderSlideOne, rdxOrderSlideTwo, rdxOrderSlideThree, rdxOrderFetchCartSuccess, rdxOrderFetchCart, rdxOrderAdjustCart, rdxOrderAdjustCartSuccess, rdxOrderCartError } from "./actions";
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
export interface ITickettype {
    expire?: string;
    id: number;
    name: string;
    price: number
    quantity?: number;
    sold?: number;
    left?: number
}
export interface IOrderReducer {
    isFetchEvent: boolean;
    isFetchEventSuccess: boolean;
    event: IEvent;
    sold: number;
    left: number;
    isCurtainOpen: boolean;
    isInfo: boolean;
    isTickettypes: boolean;
    tickettypes: ITickettype[];
    ticketTypeIndex: number;
    ticketTypeLeft: number
    topState: string;
    bottomState: string;
    isTop: boolean;
    isBottom: boolean;
    isCartFetch: boolean;
    isCartFetchSuccess: boolean;
    isCartFetchError: boolean;
    cartFetchError: any;
    recognition: string;
    isCartFetched: boolean;
}
export const orderInitial: IOrderReducer = {
    isFetchEvent: false,
    isFetchEventSuccess: false,
    event: {
        address_one: '',
        address_two: '',
        date_end: '',
        date_start: '',
        name: '',
        share_stats: false,
        time_end: '',
        time_start: '',
        venue: '',
        city: '',
        capacity: 0
    },
    sold: 0,
    left: 0,
    isCurtainOpen: false,
    isInfo: false,
    isTickettypes: false,
    tickettypes: [],
    ticketTypeIndex: 0,
    ticketTypeLeft: 0,
    topState: 'invision',
    bottomState: '',
    isTop: true,
    isBottom: false,
    isCartFetch: false,
    isCartFetchSuccess: false,
    isCartFetchError: false,
    cartFetchError: null,
    recognition: '',
    isCartFetched: false,

}
export const orderReducer = createReducer(
    orderInitial,
    on(rdxOrderFetchEvent, (state: IOrderReducer) => {
        return {
            ...state,
            isFetchEvent: true,
            isFetchEventSuccess: false
        }
    }),
    on(rdxOrderFetchEventSuccess, (state: IOrderReducer, action) => {
        return {
            ...state,
            isFetchEvent: false,
            isFetchEventSuccess: true,
            event: action.party,
            sold: action.sold,
            left: (action.party.capacity! - action.sold),
            tickettypes: action.tickettypes
        }
    }),
    on(rdxOrderIsCurtainOpenTrue, (state: IOrderReducer, action) => {
        return {
            ...state,
            isCurtainOpen: true
        }
    }),
    on(rdxOrderIsInfoTrue, (state: IOrderReducer) => {
        return {
            ...state,
            isInfo: true
        }
    }),
    on(rdxOrderIsTickettypesTrue, (state: IOrderReducer) => {
        return {
            ...state,
            isTickettypes: true
        }
    }),
    on(rdxOrderSlideOne, (state: IOrderReducer, action) => {
        return {
            ...state,
            topState: 'invision-absolute',
            bottomState: action.direction,
            isBottom: true
        }
    }),
    on(rdxOrderSlideTwo, (state: IOrderReducer, action) => {
        return {
            ...state,
            topState: action.direction,
            bottomState: 'invision'
        }
    }),
    on(rdxOrderSlideThree, (state: IOrderReducer) => {
        return {
            ...state,
            isBottom: false,
            topState: 'invision',
            ticketTypeIndex: state.tickettypes[state.ticketTypeIndex + 1] ? (state.ticketTypeIndex + 1) : 0
        }
    }),
    on(rdxOrderFetchCart, (state: IOrderReducer, action) => {
        return {
            ...state,
            isCartFetch: true,
            isCartFetchSuccess: false
        }
    }),
    on(rdxOrderFetchCartSuccess, (state: IOrderReducer, action) => {
        return {
            ...state,
            isCartFetch: false,
            isCartFetchSuccess: true,
            recognition: action.recognition,
            isCartFetched: true
        }
    }),
    on(rdxOrderFetchCartError, (state: IOrderReducer, action) => {
      return {
        ...state,
        isCartFetch: false,
        isCartFetchError: true,
        cartFetchError: action.error
      }
    }),
    on(rdxOrderAdjustCart, (state: IOrderReducer, action) => {
      return {
        ...state,
        isCartFetch: true,
        isCartFetchSuccess: false,
      }
    }),
    on(rdxOrderAdjustCartSuccess, (state: IOrderReducer, action) => {
      return {
        ...state,
        isCartFetch: false,
        isCartFetchSuccess: true
      }
    })
)
