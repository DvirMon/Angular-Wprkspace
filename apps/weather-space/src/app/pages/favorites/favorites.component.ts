import { Component, Signal, inject } from '@angular/core';
import { Router } from '@angular/router';

import { KeyValuePipe, NgFor } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { EntityMap } from '@ngrx/signals/entities';
import {
  FavoriteEntity,
  FavoriteEntityComponent,
} from '../../features/weather-favorite-card/favorite-card.component';
import { FavoriteStore } from '../../store/store-favorites';
import { OptionsStore } from '../../store/store-options';
import { WeatherStore } from '../../store/store-weather';

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
