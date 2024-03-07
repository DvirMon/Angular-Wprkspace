import { signalStoreFeature, withMethods } from '@ngrx/signals';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntitiesQueryMethod,
} from './entities.helpers';

type OptionLoader = Loader<Entity, 'loadOptions'>;

export function withOptions(
  Loader: LoaderService<OptionLoader>,
  collection: string
) {
  return signalStoreFeature(
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadOptions');
      return {
        loadOptions: loadEntitiesQueryMethod(loader, state, collection),
      };
    })
  );
}
