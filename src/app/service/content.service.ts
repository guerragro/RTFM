import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  pages: object = {
    home: {
      title: 'home', content: 'домашняя страница'
    },
    ticket: {
      title: 'ticket', content: 'поиск авиабилетов'
    },
    caclulator: {
      title: 'calculator', content: 'для расчетов'
    }
  };

  constructor() { }
}
