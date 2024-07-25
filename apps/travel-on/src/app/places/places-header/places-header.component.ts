import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { PlacesPageService } from '../../pages/places/places.service';

@Component({
  selector: 'to-places-header',
  standalone: true,
  imports: [MatToolbar, MatButtonToggle, MatButtonToggleGroup, MatIcon],
  templateUrl: './places-header.component.html',
  styleUrl: './places-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesHeaderComponent {
  #layout = inject(PlacesPageService);

  onToggleChanged() {
    this.#layout.toggleIsGrid();
  }
}
