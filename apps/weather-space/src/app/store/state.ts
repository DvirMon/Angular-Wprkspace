import { FavoriteCard } from '../features/weather-favorite-card/favorite-card.component';
import { AutocompleteResult } from '../shared/models/autocomplete-result';
import { CurrentWeatherResult } from '../shared/models/current-weather-result';
import { FutureWeatherResult } from '../shared/models/future-weather-result';

export interface AppState {
  searchResult: AutocompleteResult[];
  searchTerm: string;
  futureWeather: FutureWeatherResult | null;
  metric: boolean;
  geolocation: boolean;
}

export const initialState: AppState = {
  searchResult: [],
  searchTerm: 'tel aviv',
  futureWeather: null,
  metric: true,
  geolocation: true,
};
