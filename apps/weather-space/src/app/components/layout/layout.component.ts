import { TitleCasePipe } from '@angular/common';
import { Component, WritableSignal, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LocalService } from '../../shared/services/local.service';

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
  #localService = inject(LocalService);

  isLocal: WritableSignal<boolean> = this.#localService.getLocal();

  onValueChanged(event: MatSlideToggleChange)
  {
    this.#localService.setLocal(event.checked);
  }
}
