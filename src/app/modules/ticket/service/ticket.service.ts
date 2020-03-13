import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlModels } from '../models/url.model';

@Injectable()
export class TicketService {

  backendUrl: string = 'http://127.0.0.1:8080';

  constructor( public http: HttpClient) {}

  getDataCities(): Observable<any> {
    const params = {
      token: '49679098347c457387656573a8437d2d'
    };
    return this.http.get<any>(UrlModels.Cities, {params: (params)});
  }
  getSupDirection(data) {
    const params = {
      origin_iata: data,
      one_way: 'false',
      locale: 'RU'
    };
    return this.http.get(UrlModels.SupDirection, {params: (params)});
  }
}
