import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  apiUrl = 'api/words';

  constructor(private http: HttpClient) { }

  list(selection: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.apiUrl}/${selection}`);
  }
}
