import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  constructor() { }

  public getProject() {
    return [
      {
        id: 40,
        project: 'mobx',
        tasks: [
          {
            id: 41,
            task: 'до конца разобраться'
          }
        ],
        view: false
      },
      {
        id: 30,
        project: 'разобраться',
        tasks: [
          {
            id: 31,
            task: 'https://habr.com/ru/post/319386/'
          },
          {
            id: 32,
            task: 'ожидание ответа от сервера'
          },
          {
            id: 33,
            task: 'http://www.cyberforum.ru/javascript-beginners/thread2429406.html'
          },
          {
            id: 34,
            task: 'глифы https://www.npmjs.com/package/glyphicons-only-bootstrap'
          },
          {
            id: 35,
            task: 'глифы https://www.npmjs.com/package/glyphicons'
          }
        ],
        view: false
      },
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
            task: 'возможность сделать комментарий, их может совершать любой пользователь',
            done: false
          },
          {
            id: 17,
            task: 'выполненные задачи помещать вниз списка или скрывать ?!',
            done: false
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
      },
      {
        id: 16,
        project: 'Кошелек',
        tasks: [
          {
            id: 18,
            task: 'Структура расходов',
            done: false
          },
          {
            id: 19,
            task: 'Все перемещения внутри, если это не расходы, не должны учитываться',
            done: false
          },
          {
            id: 20,
            task: 'Графически диаграмма расходов',
            done: false
          },
          {
            id: 21,
            task: 'Фильтр по операциям',
            done: false
          }
        ],
        view: false
      }
    ];
  }
}
