import { Injectable } from '@angular/core';

@Injectable()

export class UrlModel {
  public static getWeather = 'https://api.openweathermap.org/data/2.5/weather';

  // base: "stations"
  // clouds: {all: 40}
  // cod: 200
  // coord (координаты): {lon (долгота): 131.89, lat (широта): 43.12}
  // dt: 1571791080
  // id: 2013348
  // main:
  // {temp: 282.15, pressure (давление): 1022, humidity (влажность): 66, temp_min (мин. температура на данный момент): 282.15, temp_max (макс. температура на данный момент): 282.15}
  // name: "Vladivostok"
  // sys: {type: 1, id: 8885, country: "RU", sunrise (восход): 1571780078, sunset (закат): 1571818728}
  // timezone: 36000
  // visibility: 10000
  // weather: [{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]
  // wind (ветер): {speed (ско): 2.85, deg: 10}

  // main
  // main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  //   main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
  // main.humidity Humidity, %
  // main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  //   main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  //   main.sea_level Atmospheric pressure on the sea level, hPa
  // main.grnd_level Atmospheric pressure on the ground level, hPa
  // wind
  // wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  // wind.deg Wind direction, degrees (meteorological)
  // clouds
  // clouds.all Cloudiness, %
  // rain
  // rain.1h Rain volume for the last 1 hour, mm
  // rain.3h Rain volume for the last 3 hours, mm
  // snow
  // snow.1h Snow volume for the last 1 hour, mm
  // snow.3h Snow volume for the last 3 hours, mm
  // dt Time of data calculation, unix, UTC
  // sys
  // sys.type Internal parameter
  // sys.id Internal parameter
  // sys.message Internal parameter
  // sys.country Country code (GB, JP etc.)
  // sys.sunrise Sunrise time, unix, UTC
  // sys.sunset Sunset time, unix, UTC
  // timezone Shift in seconds from UTC
  // id City ID
  // name City name
  // cod Internal parameter
}
