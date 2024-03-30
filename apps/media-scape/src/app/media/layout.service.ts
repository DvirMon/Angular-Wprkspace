import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaLayoutService {

  private _isList = signal(true);

  toggleLayout() {
    this._isList.update((value) => !value)
  }
}
