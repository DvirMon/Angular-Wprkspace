import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type OptionLoader = Loader<string, Entity, 'loadOptions'>;

export function withOptions(
  Loader: LoaderService<OptionLoader>,
  collection: string
) {
  return signalStoreFeature(
    withEntities({ entity: type<AutocompleteOption>(), collection: 'options' }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntities(loader, state, collection),
      };
    })
  );
}
