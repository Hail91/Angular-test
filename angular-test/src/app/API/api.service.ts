import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }
}
