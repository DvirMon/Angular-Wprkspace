import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'weather-space-cookies',
  standalone: true,
  imports: [TitleCasePipe, MatSlideToggle, MatListModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css',
})
export class CookiesComponent {}
