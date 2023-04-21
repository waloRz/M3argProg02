import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const works = [
      {
        id: 1,
        title: 'Facultad de Cs. Economicas - UNSa',
        urlImage: '../../../assets/img/FCEJyS.png',
        description:
          'Becario  encargado en la sala de informatica de la facultad de Cs Economicas',
      },
      {
        id: 2,
        title: 'Facultad de Cs de la Salud - UNSa',
        urlImage: '../../../assets/img/Fsalud.jpg',
        description:
          'Contratado encargado en la sala de informatica de la Facultad de Cs de la Salud',
      },
      {
        id: 3,
        title: 'Converger SRL - Salta',
        urlImage: '../../../assets/img/converger.png',
        description:
          'Encargado de sector Informatico, isntalaciones y configuraciones de equipos',
      },
    ];
    return {works}
  }
}
