import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { FavoriteEntity } from '../features/weather-favorite-card/favorite-card.component';

export const Store = signalStore(
  { providedIn: 'root' },
  withDevtools('favorites'),
  withState({ searchTerm: 'tel aviv' }),
  withEntities<FavoriteEntity>()
);
