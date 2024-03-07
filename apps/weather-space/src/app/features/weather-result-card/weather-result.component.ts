import { DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, } from '@angular/material/button-toggle';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { AutocompleteOption } from '../../shared/models/autocomplete-result';
import { CurrentWeather } from '../../shared/models/current-weather-result';
import { FutureWeather } from '../../shared/models/future-weather-result';
import { DailyTemperaturePipe } from '../../shared/pipes/daily-temperature.pipe';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';
import { IsUnitPipe } from '../../shared/pipes/unit-temperature.pipe';

export interface SelectChangeEvent {
  selected: boolean;
  source: AutocompleteOption;
}
export interface UnitChangeEvent {
  metric: boolean;
}

@Component({
  selector: 'weather-space-result-card',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconButton,
    MatIcon,
    MatCardContent,
    NgFor,
    TitleCasePipe,
    DatePipe,
    TemperaturePipe,
    IsUnitPipe,
    DailyTemperaturePipe,
  ],
})
export class WeatherResultComponent {
  currentSelection = input.required<AutocompleteOption>();
  currentWeather = input.required<CurrentWeather>();
  futureWeather = input.required<FutureWeather>();

  // weatherResult = input.required<Partial<WeatherResult>>();
  metric = input.required<boolean>();
  isFavorite = input.required<boolean>();

  @Output() selectChanged: EventEmitter<SelectChangeEvent> = new EventEmitter();
  @Output() unitChanged: EventEmitter<UnitChangeEvent> = new EventEmitter();

  constructor() {}

  // private _setPartialWeatherResult(): Partial<WeatherResult> {
  //   return {
  //     id: this.currentSelection().id,
  //     description: this.weatherResult().description,
  //     location: this.weatherResult().location,
  //     temp: this.weatherResult().temp,
  //   };
  // }

  private _emitChange() {
    this.selectChanged.emit({
      selected: this.isFavorite(),
      source: this.currentSelection(),
    });
  }

  onFavoriteChanged(): void {
    this._emitChange();
  }

  onUnitChange(event: MatButtonToggleChange) {
    const { value } = event;
    this.unitChanged.emit({ metric: value });
  }
}
