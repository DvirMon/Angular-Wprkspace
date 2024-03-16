import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../../auth/store/auth.actions';
import { PlacesActions } from './places.actions';
import { adapter, initialState } from './places.state';

export const placesReducer = createReducer(
  initialState,
  on(PlacesActions.loadPlaces, (state) => state),

  on(PlacesActions.loadPlacesSuccess, (state, action) => ({
    ...adapter.setAll(action.places, state),
    loaded: true,
  })),

  on(PlacesActions.addPlaces, (state, action) =>
    adapter.addOne(action.place, state)
  ),

  on(PlacesActions.updatePlaces, (state, action) =>
    adapter.updateOne(action.place, state)
  ),
  on(PlacesActions.deletePlaces, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

  on(AuthActions.logout, () => ({
    ...initialState,
  }))
);
