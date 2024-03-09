import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Temperature } from '../../shared/models/current-weather-result';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';
import { IsUnitPipe } from '../../shared/pipes/unit-temperature.pipe';

export interface FavoriteCard {
  id: number;
  description: string;
  location: string;
  temp: Temperature;
  favorite: boolean;
}

@Component({
  selector: 'weather-space-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    TitleCasePipe,
    IsUnitPipe,
    TemperaturePipe,
  ],
})
export class FavoriteCardComponent {
  @Input() item!: FavoriteCard;
  @Input() metric!: boolean | null;

  @Output() selectionChanged: EventEmitter<FavoriteCard> =
    new EventEmitter<FavoriteCard>();

  onSelectionChanged() {
    this.selectionChanged.emit(this.item);
  }
}
