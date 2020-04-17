export interface CityWeatherInterface {
  'ВОСХОД': string;
  'ЗАКАТ': string;
  'СКОРОСТЬ ВЕТРА': string;
  'НАПРАВЛЕНИЕ': string;
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
