import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Item, Root, VolumeInfo } from './books';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly API_URL = environment.apiUrl
  private readonly MAX_RESULTS: number = 10
  private readonly BOOKS_API_KEY = environment.googleApiKey

  constructor(
    private http: HttpClient
  ) { }



  // function to fetch books from Google Books API
  public getBooks(query?: string): Observable<Book[]> {
    return this.http.get<Root>(`${this.API_URL}?q=intitle:${query}&langRestrict=en&maxResults=${this.MAX_RESULTS}&key=${this.BOOKS_API_KEY}`).pipe(
      map((res => res.items.filter((item: Item) => item.volumeInfo.language === 'en'))),
      map(items =>
        items.map((item: Item) => this.transformBookData(item.id, item.volumeInfo))
          .filter((book: Book) => book.imageLinks != null)),

    )
  }

  // RxJS operator function to transform book data
  private transformBookData(id: string, volumeInfo: VolumeInfo): Book {
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
