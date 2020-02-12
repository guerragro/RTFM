import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  constructor() { }

  public getProject() {
    return [
      {
        id: 1,
        project: 'read me',
        task: [
          {
            id: 1,
            task: 'проблема с событием на выпадающее меню, срабатывает на дочерний блок'
          }
        ],
        view: false
      },
      {
        id: 2,
        project: 'ticket Service',
        task: [
          {
            id: 1,
            task: 'все на стадии зачатия'
          }
        ],
        view: false
      },
      {
        id: 3,
        project: 'weather Service',
        task: [
          {
            id: 1,
            task: 'Получение данных'
          },
          {
            id: 2,
            task: 'Накинуть стили'
          }
        ],
        view: false
      }
    ];
  }
}
