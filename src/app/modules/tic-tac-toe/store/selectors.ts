import {tiktactoeReducer, TikTacToeState} from './reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface appTTTState {
  games: TikTacToeState;
}

export const TTTRreducer: ActionReducerMap<appTTTState, any> = {
  games: tiktactoeReducer
};
