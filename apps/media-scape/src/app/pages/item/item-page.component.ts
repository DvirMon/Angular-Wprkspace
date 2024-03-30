import {
  KeyValuePipe,
  NgFor,
  NgOptimizedImage,
  TitleCasePipe,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  input,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
} from '@angular/material/card';
import { FormatDatePipe } from '../../shared/pipes/formatDate.pipe';
import { MediaResult } from '../../shared/types';
import { AppStore } from '../../store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-item-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    KeyValuePipe,
    TitleCasePipe,
    FormatDatePipe,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {
  #injector = inject(Injector);
  #store = inject(AppStore);

  imdbID = input.required<string>();

  media: WritableSignal<MediaResult> = signal({} as MediaResult);

  content: Signal<Partial<MediaResult>>;

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

    this.content = computed(() => ({
      Title: this.media().Title,
      Year: this.media().Year,
      Type: this.media().Type,
    }));
  }

  onError() {
    this.showImg.update((value) => !value);
  }

  onReturn() {
    runInInjectionContext(this.#injector, () =>
      inject(Router).navigateByUrl('/')
    );
  }
}
