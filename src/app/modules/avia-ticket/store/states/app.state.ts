import {CityInterface, CountryInterface} from './city.state';

export interface AppStateInterface {
  city: CityInterface[];
  // country: CountryInterface[];
  // ticket: []
}

export const InitialAppState: AppStateInterface = {
  city: null,
  // country: null,
  // ticket: null,
};
