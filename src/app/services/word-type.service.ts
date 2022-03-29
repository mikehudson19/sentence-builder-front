import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IWordType } from '../types/IWordType';


@Injectable({
  providedIn: 'root'
})
export class WordTypeService {

  apiUrl = 'api/wordTypes';

  constructor(private http: HttpClient) { }

  list(): Observable<IWordType[]> {
    return this.http.get<IWordType[]>(`${environment.apiUrl}/${this.apiUrl}`);
  }
}
