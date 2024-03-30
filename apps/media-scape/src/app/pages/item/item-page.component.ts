import { JsonPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
} from '@angular/material/card';
import { MediaResult } from '../../shared/types';
import { AppStore } from '../../store/store';

@Component({
  selector: 'ms-item-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    JsonPipe,
    MatCard,
    MatCardImage,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {
  #store = inject(AppStore);

  imdbID = input.required<string>();

  media: WritableSignal<MediaResult> = signal({} as MediaResult);

  showImg = signal(true);

  constructor() {
    effect(
      () => {
        this.media.update(() => ({
          ...this.#store.entityMap()[this.imdbID()],
        }));
      },
      { allowSignalWrites: true }
    );
  }

  onError() {
    this.showImg.update((value) => !value);
  }
}
