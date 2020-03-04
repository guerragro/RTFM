import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModel } from '../model/url.model';

@Injectable({
  providedIn: 'root'
})
export class AviaTicketService {

  constructor(
    private http: HttpClient
  ) { }

  getDataCities() {
    return this.http.get(UrlModel.city);
  }
  getDataCountry() {
    return this.http.get(UrlModel.country);
  }
}
