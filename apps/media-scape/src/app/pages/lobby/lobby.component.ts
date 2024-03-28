import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListItem, MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MediaLayoutComponent } from '../../media/media-layout/media-layout.component';

@Component({
  selector: 'ms-lobby-page',
  standalone: true,
  imports: [
    TitleCasePipe,
    MatToolbar,
    MatButton,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    MatSidenavContainer,
    MediaLayoutComponent
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LobbyPageComponent {}
