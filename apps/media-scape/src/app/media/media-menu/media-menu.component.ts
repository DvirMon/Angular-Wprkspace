import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { AppStore } from '../../store/store';
import { TitleCasePipe } from '@angular/common';
import { MediaType } from '../../shared/types';

@Component({
  selector: 'ms-media-menu',
  standalone: true,
  imports: [TitleCasePipe, MatNavList, MatListItem],
  templateUrl: './media-menu.component.html',
  styleUrl: './media-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaMenuComponent {
  #store = inject(AppStore);

  menuItems: Signal<{ type: string; amount: number }[]>;


  constructor() {
    this.menuItems = this.#store.menuItems;
  }

  onItemClick(value : string) {
    this.#store.updateType(value as MediaType)
  }
}
