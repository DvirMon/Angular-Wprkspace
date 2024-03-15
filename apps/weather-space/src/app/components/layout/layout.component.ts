import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import {
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { TitleCasePipe } from '@angular/common';
import { Store } from '../../store/store';

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

  #store = inject(Store);

  isLocally = true

}
