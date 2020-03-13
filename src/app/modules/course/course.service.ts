import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {
  //  https://www.cbr-xml-daily.ru/
  // https://openexchangerates.org/account/app-ids/?yep=app_id_deactivated

  constructor( private http: HttpClient ) {}

  public getCourse() {
    const params = {
      app_id: '360754529ab44ac0828559c96c269279',
      base: 'USD'
    };
    return this.http.get('https://openexchangerates.org/api/latest.json', {params: (params)});
  }
}
