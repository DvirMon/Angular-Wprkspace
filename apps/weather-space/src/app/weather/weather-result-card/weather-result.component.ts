import { DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output, input, model } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import {
  MatButtonToggle,
  MatButtonToggleChange,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DailyTemperaturePipe } from '../../shared/pipes/daily-temperature.pipe';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';
import { IsUnitPipe } from '../../shared/pipes/unit-temperature.pipe';
import { AutocompleteOption } from '../models/autocomplete-result';
import { CurrentWeather } from '../models/current-weather-result';
import { FutureWeather } from '../models/future-weather-result';

export interface FavoriteChangeEvent
  extends AutocompleteOption,
    CurrentWeather,
    FutureWeather {
  selected: boolean;
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
    MatIconModule,
    MatCardContent,
    NgFor,
    TitleCasePipe,
    DatePipe,
    TemperaturePipe,
    IsUnitPipe,
    DailyTemperaturePipe,
  ],
})
export class WeatherMediaResultComponent {
  optionSelected = input.required<AutocompleteOption>();
  currentWeather = input.required<CurrentWeather>();
  futureWeather = input.required<FutureWeather>();

  metric = model.required<boolean>();
  isFavorite = input.required<boolean>();

  @Output() favoriteChanged: EventEmitter<FavoriteChangeEvent> =
    new EventEmitter();
  @Output() unitChanged: EventEmitter<UnitChangeEvent> = new EventEmitter();

  private _emitChange() {
    this.favoriteChanged.emit({
      selected: !this.isFavorite(),
      ...this.optionSelected(),
      ...this.currentWeather(),
      ...this.futureWeather(),
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
