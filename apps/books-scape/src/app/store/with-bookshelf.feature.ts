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

const COLLECTION = 'shelf';

export function withBookshelf() {
  return signalStoreFeature(
    withEntities({ entity: type<Book>(), collection: COLLECTION }),
    withMethods((store) => ({
      AddToShelf(newBook: Book) {
        patchState(store, addEntity(newBook, { collection: COLLECTION }));
      },
    })),
    withComputed(({ shelfEntities }) => ({
      shelfSize: computed(() =>
        shelfEntities().length > 0 ? String(shelfEntities().length) : ''
      ),
    }))
  );
}
