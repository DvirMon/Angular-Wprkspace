import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AutocompleteResult } from './models/autocomplete-result';

import { EntityId } from '@ngrx/signals/entities';
import { distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

import { ServerService } from '../shared/services/server.service';
import {
  CURRENT_WEATHER_RESULT,
  FUTURE_WEATHER_RESULT,
  LOCATIONS_AUTOCOMPLETE_RESULT,
} from './mock/data';
import { CurrentWeatherResult } from './models/current-weather-result';
import { FutureWeatherResult } from './models/future-weather-result';
import { GeolocationWeatherResult } from './models/geolocation-weather-result';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  private readonly _baseUrl: string = environment.weatherEndpoint;

  constructor(private serverService: ServerService, private http: HttpClient) {}

  public getOptions(query: string): Observable<AutocompleteResult[]> {
    const params = new HttpParams()
      .set('apikey', environment.accuWeatherAPIKey)
      .set('q', query);
    return this.http.get<AutocompleteResult[]>(
      this._baseUrl + 'locations/v1/cities/autocomplete',
      { params }
    );
  }

  public loadOptions(query: string): Observable<AutocompleteResult[]> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getOptions(query)
      : of(LOCATIONS_AUTOCOMPLETE_RESULT);
  }

  public getCurrentWeather(
    locationKey: EntityId
  ): Observable<CurrentWeatherResult[]> {
    const params = new HttpParams().set(
      'apikey',
      environment.accuWeatherAPIKey
    );
    return this.http.get<CurrentWeatherResult[]>(
      this._baseUrl + 'currentconditions/v1/' + locationKey,
      { params }
    );
  }

  public loadCurrentWeather(
    locationKey: number
  ): Observable<CurrentWeatherResult[]> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getCurrentWeather(locationKey)
      : of(CURRENT_WEATHER_RESULT);
  }

  public getFutureWeather(
    locationKey: EntityId,
    metric: boolean
  ): Observable<FutureWeatherResult> {
    const params = new HttpParams()
      .set('apikey', environment.accuWeatherAPIKey)
      .append('metric', metric);
    return this.http.get<FutureWeatherResult>(
      this._baseUrl + 'forecasts/v1/daily/5day/' + locationKey,
      { params }
    );
  }

  public loadFutureWeather(
    locationKey: EntityId,
    metric: boolean
  ): Observable<FutureWeatherResult> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getFutureWeather(locationKey, metric)
      : of(FUTURE_WEATHER_RESULT);
  }

  private _getGeolocation(): Observable<GeolocationPosition> {
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
