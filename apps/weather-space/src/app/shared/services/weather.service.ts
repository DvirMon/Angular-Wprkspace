import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  AutocompleteOption,
  AutocompleteResult,
} from '../models/autocomplete-result';

import { environment } from 'apps/weather-space/src/environments/environment.prod';
import {
  distinctUntilChanged,
  lastValueFrom,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { EntityResult } from '../../store/entities.helpers';
import {
  CURRENT_WEATHER_RESULT,
  FUTURE_WEATHER_RESULT,
  LOCATIONS_AUTOCOMPLETE_RESULT,
} from '../mock_data/data';
import {
  CurrentWeather,
  CurrentWeatherResult,
} from '../models/current-weather-result';
import {
  FutureWeather,
  FutureWeatherResult,
} from '../models/future-weather-result';
import { GeolocationWeatherResult } from '../models/geolocation-weather-result';
import { EntityId } from '@ngrx/signals/entities';
import { WeatherHttpService } from './weather-http.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _baseUrl: string = environment.weatherEndpoint;

  constructor(
    private http: HttpClient,
    private weatherHttpService: WeatherHttpService
  ) {}

  public loadOptions(
    query: EntityId
  ): Observable<EntityResult<AutocompleteOption>> {
    return this.weatherHttpService.getOptions(query).pipe(
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
    locationKey: EntityId
  ): Observable<EntityResult<CurrentWeather>> {
    return this.weatherHttpService.loadCurrentWeatherLocal(locationKey).pipe(
      map((data: CurrentWeatherResult[]) => {
        return { id: locationKey, ...data[0] } as CurrentWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }

  public loadFutureWeather(args: any): Observable<EntityResult<FutureWeather>> {
    const { id, metric } = args;
    return this.weatherHttpService.loadFutureWeather(id, metric).pipe(
      map((data: FutureWeatherResult) => {
        return { id, ...data } as FutureWeather;
      }),
      map((res) => ({ content: [res] }))
    );
  }

  private _getGeolocation(): Observable<any> {
    return new Observable((obs) => {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          obs.next(success);
          obs.complete();
        },
        (error) => {
          obs.error(error);
        }
      );
    });
  }

  public getGeolocationWeather(): Observable<string> {
    const url: string =
      this._baseUrl + 'locations/v1/cities/geoposition/search';

    return this._getGeolocation().pipe(
      map((position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lot = position.coords.longitude;
        return `${lat},${lot}`;
      }),
      distinctUntilChanged(),
      switchMap((query: string) => {
        const params = new HttpParams()
          .set('apikey', environment.accuWeatherAPIKey)
          .append('q', query);
        return this.http
          .get<GeolocationWeatherResult>(url, { params })
          .pipe(map((res: GeolocationWeatherResult) => res.LocalizedName));
      })
    );
  }
}
