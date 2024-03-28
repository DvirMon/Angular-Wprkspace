import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'ms-media-layout',
  standalone: true,
  imports: [],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaLayoutComponent {
  #mediaService = inject(MediaService);

  constructor() {
    this.#mediaService.loadMedia().subscribe((value) => console.log(value));
  }
}
