/* eslint-disable @angular-eslint/component-selector */
import { Component, Signal, inject } from '@angular/core';

import { patchState } from '@ngrx/signals';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { SearchInputComponent } from '../../search-input/search-input.component';
import { AppSignalSore } from '../../store/store';

@Component({
  selector: 'books-scape-home',
  standalone: true,
  imports: [BookCardComponent, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  #store = inject(AppSignalSore);

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
