import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesPageService {
  private _isGrid = signal(true);

  getIsGrid() {
    return this._isGrid;
  }

  toggleLayout() {
    this._isGrid.update((value) => !value);
  }
}
