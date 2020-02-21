import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelfDevService {

  constructor() { }

  getSelfTask() {
    return [
      'Пей больше воды', 'Не больше одной ложки сахара в чай', 'Если играешь, делай разминку', 'Обнимай ее',
      'Уделай по 30 минут на английский'
    ];
  }
}
