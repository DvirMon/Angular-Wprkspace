import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  inject,
} from '@angular/core';
import { AppStore } from '../../store/store';
import { Result } from '../../shared/types';
import { JsonPipe } from '@angular/common';

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

  media: Signal<Result[]>;
  movies: Signal<Result[]>;
  series: Signal<Result[]>;
  games: Signal<Result[]>;

  constructor() {
    this.media = this.#store.media;
    this.movies = this.#store.movies;
    this.series = this.#store.series;
    this.games = this.#store.games;
  }

  ngOnInit(): void {
    this.#store.loadMedia();
  }
}
