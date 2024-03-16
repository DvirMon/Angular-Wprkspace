import { TitleCasePipe } from '@angular/common';
import { Component, WritableSignal, computed, inject } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { ServerService } from '../../shared/services/server.service';

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
    MatToolbar,
    MatButton,
    MatSlideToggle,
  ],
})
export class LayoutComponent {
  #ServerService = inject(ServerService);

  isServer: WritableSignal<boolean> = this.#ServerService.getServer();

  toggleLabel = computed(() => 'server ' + (this.isServer() ? "on" : 'off') )

  onValueChanged(event: MatSlideToggleChange) {
    this.#ServerService.setServer(event.checked);
  }
}
