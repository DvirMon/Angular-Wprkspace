import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Signal, inject, input } from '@angular/core';

import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {
  MatList,
  MatListItem,
  MatListModule,
  MatNavList,
} from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
  #breakpointObserver = inject(BreakpointObserver);
  #store = inject(AppStore);

  showNavigation = input<boolean>(false);

  protected readonly title: string = 'the books scape';

  public readonly selectedBooks: Signal<string> = this.#store.selectedBooks;
}
