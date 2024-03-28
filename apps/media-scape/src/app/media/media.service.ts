import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  public loadMedia(): Observable<Root> {
    const url = 'assets/data.json';
    return this.http.get<Root>(url);
  }
}
