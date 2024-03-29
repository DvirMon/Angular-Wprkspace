import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MediaContentComponent } from '../../media';
import { MediaHeaderComponent } from '../../media/media-header/media-header.component';
import { MediaMenuComponent } from '../../media/media-menu/media-menu.component';

@Component({
  selector: 'ms-lobby-page',
  standalone: true,
  imports: [
    MatSidenav,

    MatSidenavContent,
    MatSidenavContainer,
    MediaContentComponent,
    MediaHeaderComponent,
    MediaMenuComponent
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LobbyPageComponent {}
