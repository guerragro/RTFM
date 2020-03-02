import {InitialCitiesState} from '../states/cities.state';
import * as fromCitiesAction from '../actions/cities.action';
import { CITIES_ACTION } from '../actions/cities.action';

export function CitiesReducer( state = InitialCitiesState, action: fromCitiesAction.Action) {
  console.log(action);
  switch (action.type) {
    case CITIES_ACTION.ADD_CITIES_OK:
      return {
        ...state, city: action.payload
      };
    case CITIES_ACTION.ADD_CITIES_ERR:
      return state;
    default:
      return state;
  }
}
