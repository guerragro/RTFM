import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {

  backendUrl = 'http://127.0.0.1:8080/';

  constructor(
    public http: HttpClient
  ) {}

  makeRequest() {
    return this.http.get(this.backendUrl);
  }
}
