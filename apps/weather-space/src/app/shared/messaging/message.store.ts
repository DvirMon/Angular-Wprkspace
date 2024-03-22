import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from './message';

@Injectable({ providedIn: 'root' })
export class MessageStore {
  #messages$ = new BehaviorSubject<Message>({} as Message);

  messages$ = this.#messages$.asObservable();

  add(message: Message) {
    this.#messages$.next(message);
  }
}
