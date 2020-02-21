export interface CityWeatherInterface {
  'ВОСХОД': string;
  'ЗАКАТ': string;
  'СКОРОСТЬ ВЕТРА': string;
  'ОБЛАЧНОСТЬ': string;
  'ВЛАЖНОСТЬ': string;
  'ДАВЛЕНИЕ': string;
  'ТЕМПЕРАТУРА': string | number;
  'ОЩУЩАЕТСЯ': string | number;
  name: string;
  id: number;
  visible: boolean;
  'tooltip': string;
}

export interface CitiesWeatherInterface {
  cities: CityWeatherInterface[];
}

// coord: {
//   lon: -0.13;
//   lat: 51.51;
// }
// weather: {
//   0: {
//     id: 804;
//     main: "Clouds";
//     description: "overcast clouds";
//     icon: "04n";
//   }
// };
// base: "stations";
// main: {
//   temp: 276.67;
//   feels_like: 271.04;
//   temp_min: 275.37;
//   temp_max: 278.15;
//   pressure: 1023;
//   humidity: 75;
// };
// visibility: 10000;
// wind: {
//   speed: 5.1;
//   deg: 240;
// };
// clouds: {
//   all: 89;
// };
// dt: 1582250997;
// sys: {
//   type: 1;
//   id: 1414;
//   country: "GB";
//   sunrise: 1582268644;
//   sunset: 1582305882;
// }
// timezone: 0;
// id: 2643743;
// name: "London";
// cod: 200;
