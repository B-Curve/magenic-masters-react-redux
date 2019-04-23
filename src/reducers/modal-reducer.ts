import { ActionType, ActionSubtype } from '../constants/action-types';
import { Action } from '../actions';
import { ModalState, ModalSize } from '../state/modal-state';

const initialState: ModalState = {
  open: false,
  size: ModalSize.MEDIUM,
  title: 'default',
  body: 'default',
};

export default (state = initialState, action: Action<ModalState>) => {
  if (action.subtype !== ActionSubtype.MODAL) {
    return state;
  }

  switch (action.type) {
    case ActionType.OPEN:
      return {
        ...state,
        ...action.payload,
        open: true,
      };
    case ActionType.CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};