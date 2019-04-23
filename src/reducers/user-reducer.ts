import { ActionType } from '../constants/action-types';
import { Action } from '../actions';

const initialState = {
  user: null,
};

export default (state = initialState, action: Action<any>) => {
  switch (action.type) {
    case ActionType.LOGIN:
    case ActionType.LOGOUT:
    case ActionType.SIGNUP:
    default:
      return state;
  }
};