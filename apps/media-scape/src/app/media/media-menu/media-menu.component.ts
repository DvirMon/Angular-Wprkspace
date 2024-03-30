import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatListItem, MatNavList } from '@angular/material/list';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe copy';
import { MediaType } from '../../shared/types';
import { AppStore } from '../../store/store';

@Component({
  selector: 'ms-media-menu',
  standalone: true,
  imports: [
    TitleCasePipe,
    PluralizePipe,
    MatNavList,
    MatListItem,
    MatButtonToggleGroup,
    MatButtonToggle,
  ],
  templateUrl: './media-menu.component.html',
  styleUrl: './media-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaMenuComponent {
  #store = inject(AppStore);

  menuItems: Signal<{ type: string; count: number }[]>;

  constructor() {
    this.menuItems = this.#store.menuItems;
  }

  onItemClick(value: string) {
    this.#store.updateType(value as MediaType);
  }
}
