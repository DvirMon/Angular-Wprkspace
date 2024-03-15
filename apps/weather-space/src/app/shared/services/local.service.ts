import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {

  private readonly local = signal(true);

  public getLocal()
  {
    return this.local;
  }

  public setLocal(value: boolean)
  {
    this.local.set(value);
  }

  public toggleLocal() {
    this.local.update((value) => !value);
  }

  public onLocal() {
    this.local.set(true);
  }

  public offLocal() {
    this.local.set(false);
  }
}
