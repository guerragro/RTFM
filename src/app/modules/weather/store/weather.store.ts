import { Injectable } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import {action, computed, observable} from 'mobx';
import { CityWeatherInterface } from '../models/cityWeather';

@Injectable()
export class WeatherStore {

  dataCity: CityWeatherInterface;
  MONTHS_ARR: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // https://uni.edu/storm/Wind%20Direction%20slide.pdf
  // direction = {
  //              'север': [350, 360, 10],
  //              'север/северо-восток': [20, 30],
  //              'северо-восток': [40, 50],
  //              'восток/северо-восток': [60, 70],
  //              'восток': [80, 90, 100],
  //              'восток/юго-восток': [110, 120],
  //              'юго-восток': [130, 140],
  //              'юг/юго-восток': [150, 160],
  //              'юг': [170, 180, 190],
  //              'юг/юго-запад': [200, 210],
  //              'юго-запад': [220, 230],
  //              'запад/юго-западный': [240, 250],
  //              'запад': [260, 270, 280],
  //              'запад/северо-западный': [290, 300],
  //              'северо-западный': [310, 320],
  //              'север/северо-западный': [330, 340],
  // };
  // direction = [
  //   {'север': [350, 360, 10]},
  //   {'север/северо-восток': [20, 30]},
  //   {'северо-восток': [40, 50]},
  //   {'восток/северо-восток': [60, 70]},
  //   {'восток': [80, 90, 100]},
  //   {'восток/юго-восток': [110, 120]},
  //   {'юго-восток': [130, 140]},
  //   {'юг/юго-восток': [150, 160]},
  //   {'юг': [170, 180, 190]},
  //   {'юг/юго-запад': [200, 210]},
  //   {'юго-запад': [220, 230]},
  //   {'запад/юго-западный': [240, 250]},
  //   {'запад': [260, 270, 280]},
  //   {'запад/северо-западный': [290, 300]},
  //   {'северо-западный': [310, 320]},
  //   {'север/северо-западный': [330, 340]}
  // ];
  direction = [
    {10: 'север'}, {20: 'север/северо-восток'}, {30: 'север/северо-восток'}, {40: 'северо-восток'}, {50: 'северо-восток'},
    {60: 'восток/северо-восток'}, {70: 'восток/северо-восток'}, {80: 'восток'}, {90: 'восток'}, {100: 'восток'}, {110: 'восток/юго-восток'},
    {120: 'восток/юго-восток'}, {130: 'юго-восток'}, {140: 'юго-восток'}, {150: 'юг/юго-восток'}, {160: 'юг/юго-восток'}, {170: 'юг'},
    {180: 'юг'}, {190: 'юг'}, {200: 'юг/юго-запад'}, {210: 'юг/юго-запад'}, {220: 'юго-запад'}, {230: 'юго-запад'}, {240: 'запад/юго-западный'},
    {250: 'запад/юго-западный'}, {260: 'запад'}, {270: 'запад'}, {280: 'запад'}, {290: 'запад/северо-западный'}, {300: 'запад/северо-западный'},
    {310: 'северо-западный'}, {320: 'северо-западный'}, {330: 'север/северо-западный'}, {340: 'север/северо-западный'}
  ];

  @observable cities: CityWeatherInterface[] = [];
  constructor( public weatherService: WeatherService) {}

  @action getWeather(data) {
    this.weatherService.getDataWeather(data).subscribe(
      res => this.fillWeatherInfo(res),
      err => console.log(err)
    );
  }
  // @action deleteWeather(id) {
  //   this.cities = this.cities.forEach((a, index) => (a.id === id) ? this.cities.splice(index, 1) : this.cities);
  // }

  // @computed

  fillWeatherInfo(ans) {
    console.log(ans);
    const city: any = ans;
    this.dataCity = {
      // https://makitweb.com/convert-unix-timestamp-to-date-time-with-javascript/
      // https://www.cy-pr.com/tools/time/
      ВОСХОД: this.unixtimestamp(city.sys.sunrise),
      ЗАКАТ: this.unixtimestamp(city.sys.sunset),
      'СКОРОСТЬ ВЕТРА': city.wind.speed + ' м/с ' + this.winddirection(city.wind.deg),
      ОБЛАЧНОСТЬ: city.weather[0].description,
      ВЛАЖНОСТЬ: city.main.humidity + '%',
      ДАВЛЕНИЕ: city.main.pressure * 0.75 + ' мм рт. ст.',
      ТЕМПЕРАТУРА: (city.main.temp - 273.15).toFixed(2) + ' C',
      ОЩУЩАЕТСЯ: (city.main.feels_like - 273.15).toFixed(2) + ' C',
      name: city.name,
      id: city.sys.id,
      visible: false,
      tooltip: this.makeWeatherTooltip(city),
    };
    this.cities.push(this.dataCity);
    console.log(this.cities);
  }
  makeWeatherTooltip(city: any): string {
    return 'Координаты: ' +
      city.coord.lon + ' долготы ' +
      city.coord.lat + ' широты ';
  }
  unixtimestamp(time): string {
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = this.MONTHS_ARR[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const convdateTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return convdateTime;
  }
  winddirection(dir) {
    // this.direction.filter(a => (a == dir) ? )
  }
}
