import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppStore } from './store/store';

@Component({
  standalone: true,
  imports: [LayoutComponent, RouterModule],
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #store = inject(AppStore);

  ngOnInit(): void {
    this.#store.loadMedia();
  }
}
