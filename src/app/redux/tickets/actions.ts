import { createAction, props } from '@ngrx/store';
import { ITicket } from './reducer';

export const RDX_TICKETS_OPEN_TRIGGER = 'RDX_TICKETS_OPEN_TRIGGER';
export const rdxTicketsOpenTrigger = createAction(
  RDX_TICKETS_OPEN_TRIGGER,
)
export const RDX_TICKETS_OPEN = 'RDX_TICKETS_OPEN';
export const rdxTicketsOpen = createAction(
  RDX_TICKETS_OPEN
)
export const RDX_TICKETS_FETCH  = 'RDX_TICKETS_FETCH';
export const rdxTicketsFetch = createAction(
  RDX_TICKETS_FETCH,
  props<{ event: number, recognition: string }>()
)
export const RDX_TICKETS_FETCH_SUCCESS = 'RDX_TICKETS_FETCH_SUCCESS'
export const rdxTicketsFetchSuccess = createAction(
  RDX_TICKETS_FETCH_SUCCESS,
  props<{ tickets: ITicket[] }>()
)
export const RDX_TICKETS_SLIDE_ONE = 'RDX_TICKETS_SLIDE_ONE';
export const rdxTicketsSlideOne = createAction(
  RDX_TICKETS_SLIDE_ONE,
  props<{ left: boolean }>()
)
export const RDX_TICKETS_SLIDE_TWO = 'RDX_TICKETS_SLIDE_TWO';
export const rdxTicketsSlideTwo = createAction(
  RDX_TICKETS_SLIDE_TWO,
  props<{ topState: string }>()
)
export const RDX_TICKETS_SLIDE_THREE = 'RDX_TICKETS_SLIDE_THREE';
export const rdxTicketsSlideThree = createAction(
  RDX_TICKETS_SLIDE_THREE
)
export const RDX_TICKETS_ONBOARD = 'RDX_TICKETS_ONBOARD';
export const rdxTicketsOnboard = createAction(
  RDX_TICKETS_ONBOARD,
  props<{ event: number, recognition: string }>()
)
export const RDX_TICKETS_ISONBOARDED = 'RDX_TICKETS_ISONBOARDED';
export const rdxTicketsIsonboarded = createAction(
  RDX_TICKETS_ISONBOARDED,
)
export const RDX_TICKETS_ONBOARD_SUCCESS = 'RDX_TICKETS_ONBOARD_SUCCESS';
export const rdxTicketsOnboardSuccess = createAction(
  RDX_TICKETS_ONBOARD_SUCCESS,
  props<{ link: string }>()
)

export const RDX_TICKETS_RESALE_CANCEL = 'RDX_TICKETS_RESALE_CANCEL';
export const rdxTicketsResaleCancel = createAction(
  RDX_TICKETS_RESALE_CANCEL,
  props<{ id: string, event: number, recognition: string }>()
)
export const RDX_TICKETS_RESALE_CANCEL_SUCCESS = 'RDX_TICKETS_RESALE_CANCEL_SUCCESS';
export const rdxTicketsResaleCancelSuccess = createAction(
  RDX_TICKETS_RESALE_CANCEL_SUCCESS,
  props<{ event: number, recognition: string }>()
)
export const RDX_TICKETS_RESET = 'RDX_TICKETS_RESET';
export const rdxTicketsReset = createAction(
  RDX_TICKETS_RESET
)
