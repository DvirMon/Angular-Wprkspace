import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { lastValueFrom } from 'rxjs';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type OptionLoader = Loader<string, Entity, 'loadOptions'>;

const COLLECTION = 'options';

export function withOptions(Loader: LoaderService<OptionLoader>) {
  return signalStoreFeature(
    withEntities({
      entity: type<AutocompleteOption>(),
      collection: COLLECTION,
    }),

    withMethods((state) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntities(loader, state),
        async loadOptionAsync(query: string) {
          const res = await lastValueFrom(loader(query));
          const options = res.content as AutocompleteOption[];
          patchState(state, addEntities(options, { collection: COLLECTION }));
        },
      };
    })
  );
}
