import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { BooksService } from '../../books/books.service';
import { SearchInputComponent, SearchResultsData } from '../../search-input/search-input.component';
import { StoreService, AppState } from '../../shared/store.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookCardComponent, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  booksService: BooksService = inject(BooksService);
  storeService: StoreService = inject(StoreService);

  public readonly books: Signal<Book[]>;
  protected readonly initialValue: Signal<string>;
  protected readonly booksLoaded: Signal<boolean>;
  protected readonly searchResultsData: Signal<SearchResultsData>;

  constructor() {
    this.books = this.storeService.selectBooks;
    this.initialValue = this.storeService.selectSearchTerm;
    this.booksLoaded = this.storeService.selectBooksLoaded;
    this.searchResultsData = this.storeService.selectSearchData;
  }

  onTermChanged(value: string): void {
    if (!this.booksLoaded() || this.initialValue() !== value) {
      this.booksService
        .getBooks(value)
        .subscribe((books) =>
          this.storeService.update({ books, searchTerm: value })
        );
    }
  }

  onAddToCart(newBook: Book): void {
    this.storeService.update((state: AppState) => {
      if (state.cart.some((book: Book) => book.id === newBook.id)) {
        return state;
      }

      return {
        ...state,
        cart: [...state.cart, newBook],
      };
    });
  }
}
