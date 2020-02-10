import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  constructor() { }

  public getProject() {
    return [
      {
        project: "ticket Service",
        task: [
          "все на стадии зачатия"
        ]
      },
      {
        project: "weather Service",
        task: [
          "Получение данных", "Накинуть стили"
        ]
      }
    ];
  }
}
