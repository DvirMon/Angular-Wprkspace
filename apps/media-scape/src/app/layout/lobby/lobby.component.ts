import { Component, Signal, inject, input } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'ms-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
    TitleCasePipe,
    UpperCasePipe,
    MatToolbar,
    MatButton,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    MatSidenavContainer,
    MatIconModule,
    MatIconButton,
    MatBadgeModule,
  ],
})
export class DashboardComponent {

  showNavigation = input<boolean>(false);
  showShopping = input<boolean>(true);

  protected readonly title: string = 'the media scape';

}
