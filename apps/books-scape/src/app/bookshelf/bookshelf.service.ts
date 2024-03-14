import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookshelfHttpService {
  constructor(private http: HttpClient) {}

  public loadUserShelf() {
    const url = 'https://www.googleapis.com/books/v1/users/userId/bookshelves';
    return this.http.get(url);
  }
}
