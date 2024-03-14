import {
  patchState,
  signalStoreFeature,
  type,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';

import { computed } from '@angular/core';
import { Book } from '../books/books';

const COLLECTION = 'basket';

export function withBasket() {
  return signalStoreFeature(
    withEntities({ entity: type<Book>(), collection: COLLECTION }),
    withMethods((store) => ({
      addToCart(newBook: Book) {
        patchState(store, addEntity(newBook, { collection: COLLECTION }));
      },
    })),
    withComputed(({ basketEntities }) => ({
      baskedSize: computed(() =>
        basketEntities().length > 0 ? String(basketEntities().length) : ''
      ),
    }))
  );
}
