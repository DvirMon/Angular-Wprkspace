import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'ms-media-layout',
  standalone: true,
  imports: [],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaLayoutComponent implements OnInit {
  #mediaService = inject(MediaService);

  ngOnInit(): void {
    this.#mediaService.loadMedia();
  }
}
