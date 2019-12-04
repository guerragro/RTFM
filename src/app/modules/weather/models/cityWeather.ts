export interface CityWeatherInterface {
  'ВОСХОД': string;
  'ЗАКАТ': string;
  'СКОРОСТЬ ВЕТРА': string;
  'ОБЛАЧНОСТЬ': string;
  'ВЛАЖНОСТЬ': string;
  'ДАВЛЕНИЕ': string;
  'ТЕМПЕРАТУРА': string;
  id: number;
  visible: boolean;
  'tooltip': any;
}

export interface CitesWeatherInterface {
  city: CitesWeatherInterface;
}
