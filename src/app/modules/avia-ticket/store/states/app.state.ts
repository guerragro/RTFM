import {CityInterface, CountryInterface} from './city.state';

export interface AppStateInterface {
  city: CityInterface[];
  // country: CountryInterface[];
  // ticket: []
}

// export const InitialAppState: AppStateInterface = {
//   city: null,
//   // country: null,
//   // ticket: null,
// };

export const InitialAppState: AppStateInterface = {
  city: [
    {
      name: 'Владивосток',
      currency: 'ru',
      code: 'VVO',
      cases: null,
      name_translations: null,
    }
  ]
  // country: null,
  // ticket: null,
};
