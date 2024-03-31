import { Component, Signal, inject } from '@angular/core';

import { patchState } from '@ngrx/signals';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';
import { SearchInputComponent } from '@dom/components';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'books-scape-volume-page',
  standalone: true,
  imports: [DashboardComponent, BookCardComponent, SearchInputComponent],
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss'],
})
export class VolumesPageComponent {
  #store = inject(AppStore);

  searchControl = new FormControl<string>('angular', { nonNullable: true });

  public readonly books: Signal<Book[]>;
  public readonly initialValue: Signal<string>;

  constructor() {
    this.books = this.#store.booksEntities;
    this.initialValue = this.#store.searchTerm;
  }

  onValueChanged(value: string): void {
    patchState(this.#store, { searchTerm: value });
  }

  onAddToShelf(newBook: Book): void {
    this.#store.AddToShelf(newBook);
  }
}
