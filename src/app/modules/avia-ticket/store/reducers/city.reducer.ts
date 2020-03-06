import * as fromCITY_ACTION from '../actions/city.action';
import {CITY_ACTION} from '../actions/city.action';
import {CityInterface, InitialCityState} from '../states/city.state';

export function CityReducer(state: CityInterface[], action: fromCITY_ACTION.Action) {
  switch (action.type) {
    case CITY_ACTION.ADD_CITY_OK:
      console.log(state);
      return {
        ...state, city: action.payload
      };
    case CITY_ACTION.ADD_CITY_ERR:
      return state;
    default:
      return state;
  }
}
