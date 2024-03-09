import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import {
  FavoriteCard,
  FavoriteCardComponent,
} from '../../features/weather-favorite-card/favorite-card.component';

@Component({
  selector: 'weather-space-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [NgFor, FavoriteCardComponent, AsyncPipe, KeyValuePipe],
})
export class FavoritesLayoutComponent {
  items$!: Observable<Map<number, FavoriteCard>>;
  metric$!: Observable<boolean>;

  constructor(private router: Router) {}

  private _updateQuery(id: number, location: string): void {
    console.log({ id, location });
    return;
  }

  public onSelectionChanged({ location, id }: FavoriteCard): void {
    this._updateQuery(id, location);
    this.router.navigateByUrl('/');
  }
}
