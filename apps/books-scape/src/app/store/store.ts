import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { signalStore, withHooks, withState } from "@ngrx/signals";
import { Book } from "../books/books";
import { BooksService } from "../books/books.service";
import { withCart } from "./with-cart";
import { withLoadEntities } from "./with-load-entity";
import { withSearchTerm } from "./with-search-term";

export interface AppState {
  book: Book | null;
  cart: Book[];
}

const initialState: AppState = {
  book: null,
  cart: [],
};

export const AppSignalSore = signalStore(
  { providedIn: "root" },
  withDevtools("books"),
  withState(initialState),
  withLoadEntities(BooksService),
  withCart(),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.load(store.searchTerm);
    },
  })
);
