import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Places } from './places.model';
import { API_URL } from '../shared/tokans';

@Injectable({
  providedIn: 'root',
})
export class PlacesHttpService {

  readonly #http = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);

  public loadPlaces(): Observable<Places[]> {
    const url = `${this.#apiUrl}/places`;
    return this.#http.get<Places[]>(url).pipe(tap((v) => console.log(v)));
  }

}
