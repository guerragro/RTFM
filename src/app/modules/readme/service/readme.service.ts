import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  constructor() { }

  public getProject() {
    return [
      {
        project: 'read me',
        task: [
          'если не соответствует id текущей задачи то не открывать'
        ],
        view: false
      },
      {
        // id: 1,
        project: 'ticket Service',
        task: [
          'все на стадии зачатия'
        ],
        view: false
      },
      {
        // id: 2,
        project: 'weather Service',
        task: [
          'Получение данных', 'Накинуть стили'
        ],
        view: false
      }
    ];
  }
}
