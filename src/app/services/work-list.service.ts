import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { WORKS } from 'src/assets/files/mock-works';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkListService {
  constructor() {}

  works: persona[] = WORKS;
  
  getWorks(): Observable<persona[]>  {
    const works = of(WORKS);
    return works;
  }
}
