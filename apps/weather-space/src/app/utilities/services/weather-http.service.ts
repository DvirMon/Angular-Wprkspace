import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {
  AutocompleteResOption,
  AutocompleteResult,
} from "../models/autocomplete-result";


import { environment } from "apps/weather-space/src/environments/environment.prod";
import {
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap
} from "rxjs";
import { EntityResult } from "../../store/with-load-entity";
import {
  LOCATIONS_AUTOCOMPLETE_RESULT
} from "../mock_data/data";
import { GeolocationWeatherResult } from "../models/geolocation-weather-result";

@Injectable({
  providedIn: "root",
})
export class WeatherHttpService {
  private _baseUrl: string = environment.weatherEndpoint;

  constructor(private http: HttpClient) {}

  public loadQuery(query: string): Observable<EntityResult<AutocompleteResOption>> {
    return of(LOCATIONS_AUTOCOMPLETE_RESULT).pipe(
      map((results) => this._mapToAutocompleteResults(results)),
      map((options) => ({ content: options }))
    );
  }

  private _mapToAutocompleteResults(
    input: AutocompleteResult[]
  ): AutocompleteResOption[] {
    return input.map((item) => ({
      id: item.Key,
      Version: item.Version,
      Type: item.Type,
      Rank: item.Rank,
      LocalizedName: item.LocalizedName,
      Country: item.Country,
      AdministrativeArea: item.AdministrativeArea,
    }));
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
      this._baseUrl + "locations/v1/cities/geoposition/search";

    return this._getGeolocation().pipe(
      map((position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lot = position.coords.longitude;
        return `${lat},${lot}`;
      }),
      distinctUntilChanged(),
      switchMap((query: string) => {
        const params = new HttpParams()
          .set("apikey", environment.accuWeatherAPIKey)
          .append("q", query);
        return this.http
          .get<GeolocationWeatherResult>(url, { params })
          .pipe(map((res: GeolocationWeatherResult) => res.LocalizedName));
      })
    );
  }
}
