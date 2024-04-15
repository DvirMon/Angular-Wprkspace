import { TitleCasePipe } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
} from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import {
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';

import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { RouterLink } from '@angular/router';
import { ServerService } from '../../shared/services/server.service';
import { Store } from '../../store/store';
import { CookiesComponent } from '../cookies/cookies.component';

@Component({
  selector: 'weather-space-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    MatSidenavContainer,
    MatSidenavContent,
    MatBottomSheetModule,
    MatToolbar,
    MatButton,
    MatSlideToggle,
    MatBadge,
  ],
})
export class LayoutComponent {
  #serverService = inject(ServerService);

  #store = inject(Store);

  #bottomSheet = inject(MatBottomSheet);

  isServer: WritableSignal<boolean> = this.#serverService.getServer();

  toggleLabel = computed(() => 'server ' + (this.isServer() ? 'on' : 'off'));

  favoriteCount: Signal<string> = this.#store.favoritesCount;

  onValueChanged(event: MatSlideToggleChange) {
    if (event.checked) {
      const t = this.#bottomSheet.open<CookiesComponent>(CookiesComponent, {
        panelClass: 'cookies-panel',
      });

      t.afterDismissed().subscribe((value) =>
        this.#serverService.setServer(event.checked)
      );
    }
  }
}
