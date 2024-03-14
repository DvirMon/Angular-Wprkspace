import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item, Root } from './books';

@Injectable({
  providedIn: 'root',
})
  
export class BooksHttpService {
  private readonly MAX_RESULTS: number = 12;

  constructor(private http: HttpClient) {}

  private constructUrlQuery(query: string): string {
    const baseQuery = `q=intitle:${encodeURIComponent(query)}`;
    const projection = `projection=lite`;
    // const languageRestrict = 'langRestrict=en';
    const maxResults = `maxResults=${this.MAX_RESULTS}`;
    // const apiKey = `key=${this.BOOKS_API_KEY}`;

    return `?${baseQuery}&${projection}&${maxResults}`;
  }

  // Fetch data from Google Books API
  public fetchBooks(query: string): Observable<Item[]> {
    return this.http
      .get<Root>(this.constructUrlQuery(query))
      .pipe(map((res) => res.items || []));
  }
}
