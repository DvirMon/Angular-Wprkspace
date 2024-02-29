import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Book, Item, Root, VolumeInfo } from "./books";
import { environment } from "../../environments/environment";

export interface LoadResponse {
  content: Book[];
}

@Injectable({
  providedIn: "root",
})
export class BooksService {
  private readonly API_URL = environment.apiUrl;
  private readonly MAX_RESULTS: number = 12;
  private readonly BOOKS_API_KEY = environment.googleApiKey;

  constructor(private http: HttpClient) {}

  public load(query?: string): Observable<LoadResponse> {
    return this.http
      .get<Root>(
        `${this.API_URL}?q=intitle:${query}&langRestrict=en&maxResults=${this.MAX_RESULTS}&key=${this.BOOKS_API_KEY}`
      )
      .pipe(
        map((res) =>
          res.items.filter((item: Item) => item.volumeInfo.language === "en")
        ),
        map((items) =>
          items
            .map((item: Item) => this.mapVolumeToBook(item.id, item.volumeInfo))
            .filter((book: Book) => book.imageLinks != null)
        ),
        map((books: Book[]) => ({
          content: books,
        }))
      );
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
