import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Temperature } from '../models/current-weather-result';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';
import { IsUnitPipe } from '../../shared/pipes/unit-temperature.pipe';

export interface FavoriteEntity {
  id: number;
  WeatherText: string;
  LocalizedName: string;
  Temperature: Temperature;
}

@Component({
  selector: 'weather-space-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
    TitleCasePipe,
    IsUnitPipe,
    TemperaturePipe,
  ],
})
export class FavoriteEntityComponent {
  item = input.required<FavoriteEntity>();
  metric = input.required<boolean>();

  @Output() selectionChanged: EventEmitter<FavoriteEntity> =
    new EventEmitter<FavoriteEntity>();

  onSelectionChanged() {
    this.selectionChanged.emit(this.item());
  }
}
