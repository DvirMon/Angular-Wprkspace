import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'weather-space-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [MatSidenavContainer, MatSidenavContent, MatToolbar, MatButton, RouterLink]
})
export class LayoutComponent {


}
