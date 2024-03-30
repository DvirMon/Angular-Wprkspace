import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleChange,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatListItem, MatNavList } from '@angular/material/list';
import { PluralizePipe } from '../../shared/pipes/pluralize.pipe copy';
import { MediaType } from '../../shared/types';
import { AppStore } from '../../store/store';
import { MediaLayoutService } from '../layout.service';

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
  #injector = inject(Injector);
  #store = inject(AppStore);

  menuItems: Signal<{ type: string; count: number }[]>;

  constructor() {
    this.menuItems = this.#store.menuItems;
  }

  onItemClick(value: string) {
    this.#store.updateType(value as MediaType);
  }

  onCheckedChanged() {
    runInInjectionContext(this.#injector, () =>
      inject(MediaLayoutService).toggleLayout()
    );
  }
}
