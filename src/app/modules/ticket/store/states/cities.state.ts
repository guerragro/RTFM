export interface CityInterface {
  name: string;
  currency: string;
  code: string;
  cases: object;
  name_translations: object;
}

export interface CitiesStateInterface {
  city: CityInterface[];
}

export const InitialCitiesState: CitiesStateInterface = {
  city: null
};

export interface CountryInterface {
  time_zone: string;
  name: string;
  coordinates: string;
  code: string;
  cases: string;
  name_translations: string;
  country_code: string;
}

// name: "Испания"
// currency: "EUR"
// code: "ES"
// cases: {vi: "в Испанию", tv: "Испанией", ro: "Испании", pr: "Испании", da: "Испании"}
// name_translations: {en: "Spain"}

// time_zone: "Asia/Shanghai"
// name: "Линьфэнь"
// coordinates: {lon: 111.64158, lat: 36.13222}
// code: "LFQ"
// cases: {vi: "", tv: "", ro: "", pr: "", da: ""}
// name_translations: {en: "Linfen"}
// country_code: "CN"
