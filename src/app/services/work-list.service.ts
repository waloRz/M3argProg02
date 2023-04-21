import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkListService {
  private worksUrl = 'api/works';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
    
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getWorks(): Observable<persona[]> {
    return this.http
      .get<persona[]>(this.worksUrl)
      .pipe(catchError(this.handleError<persona[]>('getWorks', [])));
  }
}
