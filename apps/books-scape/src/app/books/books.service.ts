import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Book, Item, Root, VolumeInfo } from './books';
import { environment } from '../../environments/environment';

export interface LoadResponse {
  content: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API_URL = environment.apiUrl;
  private readonly MAX_RESULTS: number = 10;
  private readonly BOOKS_API_KEY = environment.googleApiKey;

  constructor(private http: HttpClient) {}

  // function to fetch books from Google Books API}
  public load(query?: string): Observable<LoadResponse> {
    return this.fetchBooksFromApi(query as string).pipe(
      map((items) => this.filterItemsByLanguage(items, 'en')),
      map((items) => this.mapItemsToBooks(items)),
      map((books) => this.filterBooksWithImages(books)),
      map((books: Book[]) => ({
        content: books,
      }))
    );
  }

  private constructUrlQuery(query: string): string {
    const baseQuery = `q=intitle:${encodeURIComponent(query)}`;
    const languageRestrict = 'langRestrict=en';
    const maxResults = `maxResults=${this.MAX_RESULTS}`;
    const apiKey = `key=${this.BOOKS_API_KEY}`;

    return `${this.API_URL}?${baseQuery}&${languageRestrict}&${maxResults}&${apiKey}`;
  }

  // Fetch data from Google Books API
  private fetchBooksFromApi(query: string): Observable<Item[]> {
    return this.http
      .get<Root>(this.constructUrlQuery(query))
      .pipe(map((res) => res.items || []));
  }

  // Filter items by language
  private filterItemsByLanguage(items: Item[], language: string): Item[] {
    return items.filter((item) => item.volumeInfo.language === language);
  }

  // Map items to books
  private mapItemsToBooks(items: Item[]): Book[] {
    return items.map((item) => this.mapVolumeToBook(item.id, item.volumeInfo));
  }

  // Filter books with images
  private filterBooksWithImages(books: Book[]): Book[] {
    return books.filter((book) => book.imageLinks != null);
  }

  // RxJS operator function to transform book data
  private mapVolumeToBook(id: string, volumeInfo: VolumeInfo): Book {
    return {
      id,
      title: volumeInfo.title,
      // authors: volumeInfo.authors || [],
      description: volumeInfo.description,
      // publishedDate: volumeInfo.publishedDate,
      imageLinks: volumeInfo.imageLinks,
      // categories: volumeInfo.categories
    };
  }
}
