import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { AppStore } from '../../store/store';

@Component({
  selector: 'ms-media-layout',
  standalone: true,
  imports: [],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaLayoutComponent implements OnInit {
  #store = inject(AppStore);

  ngOnInit(): void {
    this.#store.loadMedia();
  }
}
