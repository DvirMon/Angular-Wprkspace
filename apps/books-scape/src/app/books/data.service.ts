import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book, Item, VolumeInfo } from './books';
import { VolumesHttpService } from './http.service';
import { Info } from './info.t';

@Injectable({
  providedIn: 'root',
})
export class VolumesDataService {
  constructor(private bookHttp: VolumesHttpService) {}

  // Fetch books from Google Books API
  public loadVolumes(query: string): Observable<Book[] | Book> {
    return this.bookHttp.fetchVolumes(query as string).pipe(
      map((items) => this.mapItemsToBooks(items)),
      map((books) => this.filterBooksWithImages(books))
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

  public loadVolumeInfo(volId: string): Observable<Info> {
    return this.bookHttp.fetchVolumeInfo(volId);
  }
}
