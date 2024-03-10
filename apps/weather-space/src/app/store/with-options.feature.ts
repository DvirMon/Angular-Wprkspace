import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';
import { lastValueFrom } from 'rxjs';

type OptionLoader = Loader<string, Entity, 'loadOptions'>;

export function withOptions(Loader: LoaderService<OptionLoader>) {
  return signalStoreFeature(
    withEntities<AutocompleteOption>(),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntities(loader, state),
        async loadOptionAsync(query: string) {
          const res = await lastValueFrom(loader(query));
          const options = res.content as AutocompleteOption[];
          patchState(state, addEntities(options));
        },
      };
    })
  );
}
