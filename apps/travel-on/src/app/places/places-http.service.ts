import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Places } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesHttpService {

  readonly #http = inject(HttpClient);

  public loadPlaces(): Observable<Places[]> {
    const url = 'http://localhost:3000/api/places';
    return this.#http.get<Places[]>(url).pipe(tap((v) => console.log(v)));
  }

}
