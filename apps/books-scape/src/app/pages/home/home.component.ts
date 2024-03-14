import { Component, Signal, inject } from '@angular/core';

import { patchState } from '@ngrx/signals';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';
import { SearchInputComponent } from '@dom/components';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';

@Component({
  selector: 'books-scape-home',
  standalone: true,
  imports: [DashboardComponent, BookCardComponent, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  #store = inject(AppStore);

  public readonly books: Signal<Book[]>;
  public readonly initialValue: Signal<string>;

  constructor() {
    this.books = this.#store.entities;
    this.initialValue = this.#store.searchTerm;
  }

  onTermChanged(value: string): void {
    patchState(this.#store, { searchTerm: value });
  }

  onAddToCart(newBook: Book): void {
    this.#store.addToCart(newBook);
  }
}
