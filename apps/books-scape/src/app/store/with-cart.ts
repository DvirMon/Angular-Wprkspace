import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Book } from '../books/books';
import { computed } from '@angular/core';

export const withbasket = () =>
  signalStoreFeature(
    withState({ basket: [] as Book[] }),
    withMethods((store) => ({
      addTobasket(newBook: Book) {
        if (store.basket().some((book: Book) => book.id === newBook.id)) {
          return;
        }
        patchState(store, { basket: [...store.basket(), newBook] });
      },
    })),
    withComputed(({ basket }) => ({
      selectedBooks: computed(() =>
        basket().length > 0 ? String(basket().length) : ''
      ),
    }))
  );
