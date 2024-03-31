import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { MediaResult, Root } from '../shared/types';
import { DATA } from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class MediaHttpService {
  constructor(private http: HttpClient) {}

  public loadMedia(): Observable<Root> {
    // const url = 'assets/data.json';
    // return this.http.get<Root>(url);
    return of(DATA)
  }
  public updateMedia(item: MediaResult): Observable<MediaResult> {
    const url = 'assets/data.json';
    return of(url).pipe(
      tap(() => console.log('mimic http put')),
      map(() => item)
    );
  }
}
