import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  AutocompleteMediaResult,
  AutocompleteOption,
} from './models/autocomplete-result';
import {
  CurrentWeather,
  CurrentWeatherMediaResult,
} from './models/current-weather-result';
import {
  FutureWeather,
  FutureWeatherArgs,
  FutureWeatherMediaResult,
} from './models/future-weather-result';
import { WeatherHttpService } from './weather-http.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private weatherHttp: WeatherHttpService) {}

  public loadOptions(query: string): Observable<AutocompleteOption[]> {
    return this.weatherHttp
      .loadOptions(query)
      .pipe(
        map((MediaResults) => this._mapToAutocompleteMediaResults(MediaResults))
      );
  }

  private _mapToAutocompleteMediaResults(
    input: AutocompleteMediaResult[]
  ): AutocompleteOption[] {
    return input.map((item) => ({
      id: Number(item.Key),
      Version: item.Version,
      Type: item.Type,
      Rank: item.Rank,
      LocalizedName: item.LocalizedName,
      Country: item.Country,
      AdministrativeArea: item.AdministrativeArea,
    }));
  }

  public loadCurrentWeather(locationKey: number): Observable<CurrentWeather[]> {
    return this.weatherHttp.loadCurrentWeather(locationKey).pipe(
      map((data: CurrentWeatherMediaResult[]) => {
        return { id: locationKey, ...data[0] } as CurrentWeather;
      }),
      map((res) => [res])
    );
  }

  public loadFutureWeather(
    args: FutureWeatherArgs
  ): Observable<FutureWeather[]> {
    const { id, metric } = args;
    return this.weatherHttp.loadFutureWeather(id, metric).pipe(
      map((data: FutureWeatherMediaResult) => {
        return { id, ...data } as FutureWeather;
      }),
      map((res) => [res])
    );
  }
}
