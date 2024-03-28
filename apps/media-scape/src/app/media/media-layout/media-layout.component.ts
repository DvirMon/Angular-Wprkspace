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
  selector: 'ms-media-layout',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaLayoutComponent implements OnInit {
  #store = inject(AppStore);

  media: Signal<Result[]>;
  movies: Signal<Result[]>;
  series: Signal<Result[]>;
  games: Signal<Result[]>;

  constructor() {
    this.media = this.#store.entities;
    this.movies = this.#store.movies;
    this.series = this.#store.series;
    this.games = this.#store.games;
  }

  ngOnInit(): void {
    this.#store.loadMedia();
  }
}
