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
        tasks: [
          {
            id: 4,
            task: 'решить проблему с переменной для task and project'
          },
          {
            id: 5,
            task: 'уменьшить размер блока Task'
          },
          {
            id: 6,
            task: 'менять цвет выполненного задание'
          },
          {
            id: 7,
            task: 'id задачи и проекта должно быть уникальным'
          }
        ],
        view: false
      },
      {
        id: 2,
        project: 'ticket Service',
        tasks: [
          {
            id: 8,
            task: 'все на стадии зачатия'
          }
        ],
        view: false
      },
      {
        id: 3,
        project: 'weather Service',
        tasks: [
          {
            id: 9,
            task: 'Получение данных'
          },
          {
            id: 10,
            task: 'Накинуть стили'
          }
        ],
        view: false
      }
    ];
  }
}
