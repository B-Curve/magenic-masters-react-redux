import { ActionType, ActionSubtype } from './constants/action-types';

export interface Action <T> {
  type: ActionType;
  subtype?: ActionSubtype;
  payload?: T;
  async?: boolean;
}

export type ActionFn<T> = (action: Action<T>) => void;