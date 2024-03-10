import { Injectable } from '@angular/core';

import {
  AutocompleteOption,
  AutocompleteResult,
} from '../models/autocomplete-result';

import { map, Observable } from 'rxjs';
import { EntityResult } from '../../store/entities.helpers';
import {
  CurrentWeather,
  CurrentWeatherResult,
} from '../models/current-weather-result';
import {
  FutureWeather,
  FutureWeatherArgs,
  FutureWeatherResult,
} from '../models/future-weather-result';
import { WeatherHttpService } from './weather-http.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private weatherHttpService: WeatherHttpService) {}

  public loadOptions(
    query: string
  ): Observable<EntityResult<AutocompleteOption>> {
    return this.weatherHttpService.loadOptions(query).pipe(
      map((results) => this._mapToAutocompleteResults(results)),
      map((options) => ({ content: options }))
    );
  }

  private _mapToAutocompleteResults(
    input: AutocompleteResult[]
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
  ): Observable<EntityResult<CurrentWeather>> {
    return this.weatherHttpService.loadCurrentWeatherLocal(locationKey).pipe(
      map((data: CurrentWeatherResult[]) => {
        return { id: locationKey, ...data[0] } as CurrentWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }

  public loadFutureWeather(
    args: FutureWeatherArgs
  ): Observable<EntityResult<FutureWeather>> {
    const { id, metric } = args;
    return this.weatherHttpService.loadFutureWeather(id, metric).pipe(
      map((data: FutureWeatherResult) => {
        return { id, ...data } as FutureWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }
}
