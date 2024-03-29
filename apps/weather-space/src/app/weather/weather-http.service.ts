import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AutocompleteMediaResult } from './models/autocomplete-MediaResult';

import { EntityId } from '@ngrx/signals/entities';
import { distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

import { ServerService } from '../shared/services/server.service';
import {
  CURRENT_WEATHER_MediaResult,
  FUTURE_WEATHER_MediaResult,
  LOCATIONS_AUTOCOMPLETE_MediaResult,
} from '../shared/mock/data';
import { CurrentWeatherMediaResult } from './models/current-weather-MediaResult';
import { FutureWeatherMediaResult } from './models/future-weather-MediaResult';
import { GeolocationWeatherMediaResult } from './models/geolocation-weather-MediaResult';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  private readonly _baseUrl: string = environment.weatherEndpoint;

  constructor(private serverService: ServerService, private http: HttpClient) {}

  public getOptions(query: string): Observable<AutocompleteMediaResult[]> {
    const params = new HttpParams()
      .set('apikey', environment.accuWeatherAPIKey)
      .set('q', query);
    return this.http.get<AutocompleteMediaResult[]>(
      this._baseUrl + 'locations/v1/cities/autocomplete',
      { params }
    );
  }

  public loadOptions(query: string): Observable<AutocompleteMediaResult[]> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getOptions(query)
      : of(LOCATIONS_AUTOCOMPLETE_MediaResult);
  }

  public getCurrentWeather(
    locationKey: EntityId
  ): Observable<CurrentWeatherMediaResult[]> {
    const params = new HttpParams().set(
      'apikey',
      environment.accuWeatherAPIKey
    );
    return this.http.get<CurrentWeatherMediaResult[]>(
      this._baseUrl + 'currentconditions/v1/' + locationKey,
      { params }
    );
  }

  public loadCurrentWeather(
    locationKey: number
  ): Observable<CurrentWeatherMediaResult[]> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getCurrentWeather(locationKey)
      : of(CURRENT_WEATHER_MediaResult);
  }

  public getFutureWeather(
    locationKey: EntityId,
    metric: boolean
  ): Observable<FutureWeatherMediaResult> {
    const params = new HttpParams()
      .set('apikey', environment.accuWeatherAPIKey)
      .append('metric', metric);
    return this.http.get<FutureWeatherMediaResult>(
      this._baseUrl + 'forecasts/v1/daily/5day/' + locationKey,
      { params }
    );
  }

  public loadFutureWeather(
    locationKey: EntityId,
    metric: boolean
  ): Observable<FutureWeatherMediaResult> {
    const isServer = this.serverService.getServer();

    return isServer()
      ? this.getFutureWeather(locationKey, metric)
      : of(FUTURE_WEATHER_MediaResult);
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
          .get<GeolocationWeatherMediaResult>(url, { params })
          .pipe(map((res: GeolocationWeatherMediaResult) => res.LocalizedName));
      })
    );
  }
}
