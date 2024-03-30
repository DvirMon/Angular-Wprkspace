import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';
import { MediaInfoCardComponent } from '../../media/media-info-card/media-info-card.component';

@Component({
  selector: 'ms-item-page',
  standalone: true,
  imports: [
    MediaInfoCardComponent
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {

  imdbID = input.required<string>();

 
}
