import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { MediaResult, Root } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  public loadMedia(): Observable<Root> {
    const url = 'assets/data.json';
    return this.http.get<Root>(url);
  }
  public updateMedia(item: MediaResult): Observable<MediaResult> {
    const url = 'assets/data.json';
    return of(url).pipe(
      tap(() => console.log('mimic http put')),
      map(() => item)
    );
  }
}
