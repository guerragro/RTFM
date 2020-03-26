import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Todo} from '../model';

@Injectable()
export class Service {

  backendUrl = 'http://127.0.0.1:3000/todo';

  constructor(
    public http: HttpClient
  ) {}

  // makeRequest() {}

  makeGetRequest() {
    return this.http.get('api/todo');
  }
  makePostRequest() {
    return this.http.post('api/todo', {todo: 1});
  }
}
