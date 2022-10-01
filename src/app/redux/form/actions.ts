import { createAction, props } from '@ngrx/store';
import { IQuestion, ICustom } from './reducer';
export const RDX_FORM_IS_CURTAIN_OPEN_TRUE_TRIGGER = 'RDX_FORM_IS_CURTAIN_OPEN_TRUE_TRIGGER';
export const rdxFormIsCurtainOpenTrueTrigger = createAction(
  RDX_FORM_IS_CURTAIN_OPEN_TRUE_TRIGGER,
)
export const RDX_FORM_IS_CURTAIN_OPEN_TRUE = 'RDX_FORM_IS_CURTAIN_OPEN_TRUE';
export const rdxFormIsCurtainOpenTrue = createAction(
  RDX_FORM_IS_CURTAIN_OPEN_TRUE
)

export const RDX_FORM_FETCH  = 'RDX_FORM_FETCH';
export const rdxFormFetch = createAction(
  RDX_FORM_FETCH,
  props<{ event_id: number }>()
)
export const RDX_FORM_FETCH_SUCCESS = 'RDX_FORM_FETCH_SUCCESS';
export const rdxFormFetchSuccess = createAction(
  RDX_FORM_FETCH_SUCCESS,
  props<{ questions: IQuestion[] }>()
)
export const RDX_FORM_PUSH = 'RDX_FORM_PUSH';
export const rdxFormPush = createAction(
  RDX_FORM_PUSH,
  props<{ payload: ICustom }>()
)
export const RDX_FORM_COLLECT = 'RDX_FORM_COLLECT';
export const rdxFormCollect = createAction(
  RDX_FORM_COLLECT,
  props<{ recognition: string, email: string }>()
)
export const RDX_FORM_COLLECT_FETCH = 'RDX_FORM_COLLECT_FETCH';
export const rdxFormCollectFetch = createAction(
  RDX_FORM_COLLECT_FETCH,
  props<{ recognition: string, email: string }>()
)
export const RDX_FORM_COLLECT_FETCH_SUCCESS = 'RDX_FORM_COLLECT_FETCH_SUCCESS';
export const rdxFormCollectFetchSuccess = createAction(
  RDX_FORM_COLLECT_FETCH_SUCCESS
)
