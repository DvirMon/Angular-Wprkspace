import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item, Root } from './books';
import { environment } from '../../environments/environment';
import { Info } from './info.t';

@Injectable({
  providedIn: 'root',
})
export class VolumesHttpService {
  private readonly MAX_RESULTS: number = 12;

  constructor(private http: HttpClient) {}

  private constructUrlQuery(query: string): string {
    const baseQuery = `q=intitle:${encodeURIComponent(query)}`;
    const projection = `projection=lite`;
    // const languageRestrict = 'langRestrict=en';
    const maxMediaResults = `maxMediaResults=${this.MAX_RESULTS}`;
    // const apiKey = `key=${this.BOOKS_API_KEY}`;

    return `?${baseQuery}&${projection}&${maxMediaResults}`;
  }

  // Fetch data from Google Books API
  public fetchVolumes(query: string): Observable<Item[]> {
    return this.http
      .get<Root>(this.constructUrlQuery(query))
      .pipe(map((res) => res.items || []));
  }

  public fetchVolumeInfo(volumeId: string): Observable<Info> {
    const projection = `projection=lite`;

    const url = `${environment.apiUrl}/${volumeId}?${projection}`;

    return this.http.get<Info>(url);
  }
}
