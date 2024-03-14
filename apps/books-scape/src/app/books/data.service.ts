import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book, Item, VolumeInfo } from './books';
import { BooksHttpService } from './http.service';

export interface LoadResponse {
  content: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class BooksDataService {

  constructor(private bookHttp: BooksHttpService) {}

  // function to fetch books from Google Books API}
  public loadBooks(query?: string): Observable<LoadResponse> {
    return this.bookHttp.fetchBooks(query as string).pipe(
      map((items) => this.mapItemsToBooks(items)),
      map((books) => this.filterBooksWithImages(books)),
      map((books: Book[]) => ({
        content: books,
      }))
    );
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
      authors: volumeInfo.authors || [],
      description: volumeInfo.description,
      // publishedDate: volumeInfo.publishedDate,
      imageLinks: volumeInfo.imageLinks,
      // categories: volumeInfo.categories
    };
  }
}
