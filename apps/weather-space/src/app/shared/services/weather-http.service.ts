import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AutocompleteResult } from '../models/autocomplete-result';

import { EntityId } from '@ngrx/signals/entities';
import { distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import {
  CURRENT_WEATHER_RESULT,
  FUTURE_WEATHER_RESULT,
  LOCATIONS_AUTOCOMPLETE_RESULT,
} from '../mock_data/data';
import { CurrentWeatherResult } from '../models/current-weather-result';
import { FutureWeatherResult } from '../models/future-weather-result';
import { GeolocationWeatherResult } from '../models/geolocation-weather-result';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  private _baseUrl: string = environment.weatherEndpoint;

  constructor(private http: HttpClient) {}

  public getOptions(): Observable<AutocompleteResult[]> {
    return of(LOCATIONS_AUTOCOMPLETE_RESULT);
  }

  public loadCurrentWeatherLocal(
    locationKey: number
  ): Observable<CurrentWeatherResult[]> {
    console.log(locationKey);
    return of(CURRENT_WEATHER_RESULT);
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
    return of(FUTURE_WEATHER_RESULT);
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
