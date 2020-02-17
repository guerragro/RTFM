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
            id: 12,
            task: 'все задачи должен ставить только администратор или пользователь с правами'
          },
          {
            id: 4,
            task: 'решить проблему с переменной для task and project',
            done: false
          },
          {
            id: 5,
            task: 'уменьшить размер блока Task',
            done: false
          },
          {
            id: 6,
            task: 'менять цвет выполненного задание',
            done: false
          },
          {
            id: 7,
            task: 'id задачи и проекта должно быть уникальным',
            done: false
          },
          {
            id: 12,
            task: 'добавление даты к задачи',
            done: false
          },
          {
            id: 11,
            task: 'возможность сделать комментарий, их может совершать любой пользователь, '
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
            task: 'все на стадии зачатия',
            done: false
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
            task: 'Получение данных',
            done: false
          },
          {
            id: 10,
            task: 'Накинуть стили',
            done: false
          }
        ],
        view: false
      },
      {
        id: 15,
        project: 'подключить базу данных',
        tasks: [],
        view: false
      }
    ];
  }
}
