import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISentence } from '../types/ISentence';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  apiUrl = 'api/sentences';

  constructor(private http: HttpClient) { }

  list(): Observable<ISentence[]> {
    return this.http.get<ISentence[]>(`${environment.apiUrl}/${this.apiUrl}`);
  }

  create(body: any): Observable<ISentence> {
    return this.http.post<ISentence>(`${environment.apiUrl}/${this.apiUrl}`, body);
  }
}
