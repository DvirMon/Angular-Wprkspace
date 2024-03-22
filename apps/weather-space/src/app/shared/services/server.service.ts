import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  private readonly server = signal(true);

  public getServer() {
    return this.server;
  }

  public setServer(value: boolean) {
    this.server.set(value);
  }

  public toggleServer() {
    this.server.update((value) => !value);
  }

  public onServer() {
    this.server.set(true);
  }

  public offServer() {
    this.server.set(false);
  }
}
