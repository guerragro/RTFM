import {Action} from './action';
import * as fromAction from './action';

export interface TikTacToeState {
  game: any[];
}

export const InitialTTTState: TikTacToeState = {
  game: ['', '', 'hello']
};

export function tiktactoeReducer(state = InitialTTTState, action: Action) {
  switch (action.type) {
    case 'ADD':
      return state;
    case 'DELETE':
      return state;
    default:
      return state;
  }
}

