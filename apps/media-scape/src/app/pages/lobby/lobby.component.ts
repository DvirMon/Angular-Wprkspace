import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import {
  MediaContentComponent,
  MediaHeaderComponent,
  MediaMenuComponent,
} from '../../media';

@Component({
  selector: 'ms-lobby-page',
  standalone: true,
  imports: [
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MediaContentComponent,
    MediaHeaderComponent,
    MediaMenuComponent,
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LobbyPageComponent {}
