import { Component, Signal, inject } from '@angular/core';
import { Router } from '@angular/router';

import { KeyValuePipe, NgFor } from '@angular/common';
import {
  FavoriteEntity,
  FavoriteEntityComponent,
} from '../../features/weather-favorite-card/favorite-card.component';
import { FavoriteStore } from '../../store/store-favorites';

@Component({
  selector: 'weather-space-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [NgFor, FavoriteEntityComponent, KeyValuePipe],
})
export class FavoritesLayoutComponent {

  #favoriteStore = inject(FavoriteStore);

  items!: Signal<Map<number, FavoriteEntity>>;
  isMetric!: Signal<boolean>;

  constructor(private router: Router) {}

  private _updateQuery(id: number, LocalizedName: string): void {
    console.log({ id, LocalizedName });
    return;
  }

  public onSelectionChanged({ LocalizedName, id }: FavoriteEntity): void {
    this._updateQuery(id, LocalizedName);
    this.router.navigateByUrl('/');
  }
}
