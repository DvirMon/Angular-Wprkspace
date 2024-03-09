import { Component, Signal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { KeyValuePipe, NgFor } from '@angular/common';
import {
  FavoriteEntity,
  FavoriteEntityComponent,
} from '../../features/weather-favorite-card/favorite-card.component';
import { FavoriteStore } from '../../store/store-favorites';
import { EntityMap } from '@ngrx/signals/entities';
import { WeatherStore } from '../../store/store-weather';
import { FAVORITES } from '../../shared/mock_data/data';
import { MatButton } from '@angular/material/button';
import { OptionsStore } from '../../store/store-options';

@Component({
  selector: 'weather-space-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [NgFor, FavoriteEntityComponent, KeyValuePipe, MatButton],
})
export class FavoritesLayoutComponent {
  #optionsStore = inject(OptionsStore);
  #favoriteStore = inject(FavoriteStore);
  #weatherStore = inject(WeatherStore);

  items: Signal<EntityMap<FavoriteEntity>>;
  isMetric: Signal<boolean>;

  constructor(private router: Router) {
    this.items = this.#favoriteStore.entityMap;
    this.isMetric = this.#weatherStore.isMetric;
  }


  public onSelectionChanged({ id }: FavoriteEntity): void {
    this.#optionsStore.updateCurrentId(id);
    this.router.navigateByUrl('/');
  }
}
