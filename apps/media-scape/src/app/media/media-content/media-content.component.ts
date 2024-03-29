import { JsonPipe, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { MediaItem, MediaResult, MediaType } from '../../shared/types';
import { AppStore } from '../../store/store';
import { MediaCardComponent } from '../media-card/media-card.component';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe copy';

@Component({
  selector: 'ms-media-content',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    JsonPipe,
    TitleCasePipe,
    PluralizePipe,
    MediaCardComponent,
  ],
  templateUrl: './media-content.component.html',
  styleUrl: './media-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaContentComponent implements OnInit {
  #store = inject(AppStore);

  media: Signal<MediaItem[]>;
  mediaItem: Signal<MediaItem>;
  mediaType: Signal<MediaType>;
  hasFilterType: Signal<boolean>;

  constructor() {
    this.media = this.#store.mediaMap;

    this.mediaType = this.#store.type;

    this.hasFilterType = computed(() => !!this.mediaType());

    this.mediaItem = computed(
      () =>
        this.media().find((item) => item.type === this.mediaType()) as MediaItem
    );
  }

  ngOnInit(): void {
    this.#store.loadMedia();
  }

  onValueChanged(event: MediaResult) {
    this.#store.updateMedia(event);
  }
}
