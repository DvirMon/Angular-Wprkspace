import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaLayoutService {
  private _isList = signal(true);

  getIsList() {
    return this._isList;
  }

  toggleLayout() {
    this._isList.update((value) => !value);
  }
}
