import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  standalone: true,
  imports: [LayoutComponent, RouterModule],
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'media-scape';
}
