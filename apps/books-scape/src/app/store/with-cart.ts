import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";
import { Book } from "../books/books";
import { computed } from "@angular/core";

export const withCart = () =>
  signalStoreFeature(
    withState({ cart: [] as Book[] }),
    withMethods((store) => ({
      addToCart(newBook: Book) {
        if (store.cart().some((book: Book) => book.id === newBook.id)) {
          return;
        }
        patchState(store, { cart: [...store.cart(), newBook] });
      },
    })),
    withComputed(({ cart }) => ({
      selectedBooks: computed(() =>
        cart().length > 0 ? String(cart().length) : ""
      ),
    }))
  );
