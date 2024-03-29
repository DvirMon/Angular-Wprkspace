import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { AutocompleteOption } from '../weather/models/autocomplete-MediaResult';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from '@dom';

type OptionLoader = Loader<string, Entity, 'loadOptions'>;

const COLLECTION = 'options';

export function withOptions(Loader: LoaderService<OptionLoader>) {
  return signalStoreFeature(
    withEntities({
      entity: type<AutocompleteOption>(),
      collection: COLLECTION,
    }),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntities(loader, store, COLLECTION),

        async loadOptionAsync(query: string) {
          const res = await lastValueFrom(loader(query));
          const options = res.content as AutocompleteOption[];
          patchState(store, addEntities(options, { collection: COLLECTION }));
        },
      };
    })
  );
}
