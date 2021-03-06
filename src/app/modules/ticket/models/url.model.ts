import { Injectable } from '@angular/core';

@Injectable()

export class UrlModels {

  // https://support.travelpayouts.com/hc/ru/categories/200358578
  // https://support.travelpayouts.com/hc/ru/articles/203956163-Aviasales-API-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B4%D0%BB%D1%8F-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B

  // Данные города в формате JSON
  public static Cities = 'http://api.travelpayouts.com/data/ru/cities.json';

  // Параметры ответа
  // code — IATA-code страны.
  // name — Название страны.
  // currency — Валюта страны.
  // name_translations  — Название страны на других языках.

  // Цены на авиабилеты:
  // Возвращает список цен, найденных нашими пользователями за последние 48 часов,
  // в соответствии с выставленными фильтрами.
  public static PriceListLastest = 'http://api.travelpayouts.com/v2/prices/latest';

  //   Параметры запроса
  // currency — валюта цен на билеты. Значение по умолчанию — rub.
  // origin — пункт отправления. IATA код города или код страны. Длина не менее 2 и не более 3 символов.
  // destination — пункт назначения. IATA код города или код страны. Длина не менее 2 и не более 3.
  // Обратите внимание! Если не указывать пункт отправления и назначения, то API вернет 30 самых дешевых билетов,
  // которые были найдены за последние 48 часов. При этом нельзя использовать period_type=month.
  // beginning_of_period — первое число месяца, в который попадают даты отправления (в формате YYYY-MM-DD, например 2018-05-01).
  // Обязательно указывать при period_type равном month. Если указать только beginning_of_period, то period_type можно не указывать.
  // period_type — период, в котором искали билеты. Если период не указан, то отображаются билеты для перелётов в текущем месяце.
  // year — билеты, найденные в текущем году.
  // month — за указанный в beginning_of_period месяц.
  // one_way — true — в одну сторону, false — туда и обратно. Значение по умолчанию — false.
  // page — номер страницы. Значение по умолчанию — 1.
  // limit— количество записей на странице. Значение по умолчанию — 30. Не более 1000.
  // show_to_affiliates — false—все цены, true—только цены, найденные с партнёрским маркером (рекомендовано). Значение по умолчанию — true.
  // sorting — сортировка цен:
  // price — по цене (значение по умолчанию). Для направлений город — город возможна сортировка только по цене.
  // route — по популярности маршрута.
  // distance_unit_price — по цене за километр.
  // trip_duration — длительность пребывания в неделях.

  // Параметры ответа
  // origin  - пункт отправления.
  // destination  - пункт назначения.
  // show_to_affiliates  - false-все цены, true-только цены, найденные с помощью партнерского маркера (рекомендуется).
  // trip_class  - класс полета: 0 Эконом класс, 1 Бизнес класс, 2 Первый
  // depart_date  - дата вылета.
  // return_date  - дата возврата.
  // number_of_changes  - количество переводов.
  // value  - стоимость полета, в указанной валюте.
  // found_at  - время и дата, в которую билет был найден.
  // distance  - расстояние между пунктом отправления и пунктом назначения.
  // actual  - актуальность предложения.

  public static CityDirection = 'http://api.travelpayouts.com/v1/city-directions';

  // поддерживаемые направления
  // todo слишком много совпадающих направлений
  public static SupDirection = 'http://map.aviasales.ru/supported_directions.jsons';
}
