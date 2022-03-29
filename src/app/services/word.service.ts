import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IWord } from '../types/IWord';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  apiUrl = 'api/words';

  constructor(private http: HttpClient) { }

  list(selection: number): Observable<IWord[]> {
    return this.http.get<IWord[]>(`${environment.apiUrl}/${this.apiUrl}/${selection}`);
  }
}
