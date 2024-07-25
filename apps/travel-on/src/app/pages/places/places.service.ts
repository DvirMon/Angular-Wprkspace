import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesPageService {
  private _isGrid = signal(true);

  public getIsGrid() {
    return this._isGrid;
  }

  public toggleIsGrid() {
    this._isGrid.update((value) => !value);
  }
}
