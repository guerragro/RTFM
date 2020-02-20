export interface WeatherInterface {
  'ВОСХОД': string;
  'ЗАКАТ': string;
  'СКОРОСТЬ ВЕТРА': string;
  'ОБЛАЧНОСТЬ': string;
  'ВЛАЖНОСТЬ': string;
  'ДАВЛЕНИЕ': string;
  'ТЕМПЕРАТУРА': string;
  'ОЩУЩАЕТСЯ': string;
  name: string;
  id: number;
  visible: boolean;
  'tooltip': any;
}

export interface CitiesWeatherInterface {
  cities: WeatherInterface[];
}
