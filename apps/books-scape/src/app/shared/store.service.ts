import { Injectable, Signal, computed } from '@angular/core';
import { Book } from '../books/books';
import { Store } from './store/store';
import { withStoreConfiguration } from './store/store.helpers';
import { SearchResultsData } from '../search-input/search-input.component';

export interface AppState {
  searchTerm  : string
  books: Book[],
  book: Book | null,
  cart : Book[]
}

export function createInitialState(): AppState {
  return {
    searchTerm : 'Angular',
    books: [],
    cart: [],
    book: null
  }
}


@Injectable({
  providedIn: 'root'
})
export class StoreService extends Store<AppState> {

  public selectBooks: Signal<Book[]> = this.select('books');
  public selectCart: Signal<Book[]> = this.select('cart');
  public selectSearchTerm: Signal<string> = this.select('searchTerm');
  public selectBooksLoaded : Signal<boolean> = computed(() => !!this.selectBooks().length);
  public selectSearchData : Signal<SearchResultsData> =   computed(() => { return {totalResults : this.selectBooks().length }})

  constructor() {
    super(createInitialState(), withStoreConfiguration({name : 'App Store'}))
  }
}
