import { FavoriteCard } from '../features/weather-favorite-card/favorite-card.component';
import { AutocompleteResult } from '../shared/models/autocomplete-result';
import { CurrentWeatherResult } from '../shared/models/current-weather-result';
import { FutureWeatherResult } from '../shared/models/future-weather-result';

export interface AppState {
  searchResult: AutocompleteResult[];
  searchTerm: string;
  currentWeatherResults: { [key: number]: CurrentWeatherResult };
  futureWeatherResults: { [key: number]: FutureWeatherResult };
  futureWeather: FutureWeatherResult | null;
  favorites: Map<number, FavoriteCard>;
  metric: boolean;
  geolocation: boolean;
}

export const initialState: AppState = {
  searchResult: [],
  searchTerm: 'tel aviv',
  currentWeatherResults: {},
  futureWeatherResults: {},
  futureWeather: null,
  favorites: new Map<number, FavoriteCard>(),
  metric: true,
  geolocation: true,
};
