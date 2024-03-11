import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DomComponent } from '@dom';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'books-scape-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, DashboardComponent, DomComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'books-scape';
}
