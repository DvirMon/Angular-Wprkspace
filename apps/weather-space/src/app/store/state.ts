import { FavoriteCard } from "../features/weather-favorite-card/favorite-card.component";
import { AutocompleteResult } from "../utilities/models/autocomplete-result";
import { CurrentWeatherResult } from "../utilities/models/current-weather-result";
import { FutureResultObject } from "../utilities/models/future-weather-result";

export interface AppState {
  searchResult: AutocompleteResult[];
  searchTerm: string;
  currentWeatherResults: { [key: number]: CurrentWeatherResult };
  futureWeatherResults: { [key: number]: FutureResultObject };
  futureWeather: FutureResultObject | null;
  favorites: Map<number, FavoriteCard>;
  metric: boolean;
  geolocation: boolean;
}

export const initialState: AppState = {
  searchResult: [],
  searchTerm: "tel aviv",
  currentWeatherResults: {},
  futureWeatherResults: {},
  futureWeather: null,
  favorites: new Map<number, FavoriteCard>(),
  metric: true,
  geolocation: true,
};
