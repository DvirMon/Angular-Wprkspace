import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type OptionLoader = Loader<void, Entity, 'loadOptions'>;

export function withOptions(Loader: LoaderService<OptionLoader>) {
  return signalStoreFeature(
    withEntities<AutocompleteOption>(),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntities(loader, state),
      };
    })
  );
}
