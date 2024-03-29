import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { MediaResult } from '../../shared/types';
import { AppStore } from '../../store/store';
import { isTypeEqual } from '../../store/with-filter.feature';

@Component({
  selector: 'ms-media-content',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './media-content.component.html',
  styleUrl: './media-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaContentComponent implements OnInit {
  #store = inject(AppStore);

  hasFilterType: Signal<boolean>;
  media: Signal<MediaResult[]>;
  results: Signal<MediaResult[]>;

  constructor() {
    this.hasFilterType = computed(() => !!this.#store.type());

    this.media = this.#store.media;

    this.results = computed(() =>
      this.#store.media().filter(isTypeEqual(this.#store.type()))
    );
  }

  ngOnInit(): void {
    this.#store.loadMedia();
  }
}
