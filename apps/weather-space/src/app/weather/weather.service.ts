import { Injectable } from '@angular/core';

import {
  AutocompleteOption,
  AutocompleteMediaResult,
} from './models/autocomplete-MediaResult';

import { map, Observable } from 'rxjs';
import {
  CurrentWeather,
  CurrentWeatherMediaResult,
} from './models/current-weather-MediaResult';
import {
  FutureWeather,
  FutureWeatherArgs,
  FutureWeatherMediaResult,
} from './models/future-weather-MediaResult';
import { WeatherHttpService } from './weather-http.service';
import { EntityMediaResult } from '@dom';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private weatherHttp: WeatherHttpService) {}

  public loadOptions(
    query: string
  ): Observable<EntityMediaResult<AutocompleteOption>> {
    return this.weatherHttp.loadOptions(query).pipe(
      map((MediaResults) => this._mapToAutocompleteMediaResults(MediaResults)),
      map((options) => ({ content: options }))
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

  public loadCurrentWeather(
    locationKey: number
  ): Observable<EntityMediaResult<CurrentWeather>> {
    return this.weatherHttp.loadCurrentWeather(locationKey).pipe(
      map((data: CurrentWeatherMediaResult[]) => {
        return { id: locationKey, ...data[0] } as CurrentWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }

  public loadFutureWeather(
    args: FutureWeatherArgs
  ): Observable<EntityMediaResult<FutureWeather>> {
    const { id, metric } = args;
    return this.weatherHttp.loadFutureWeather(id, metric).pipe(
      map((data: FutureWeatherMediaResult) => {
        return { id, ...data } as FutureWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }
}
