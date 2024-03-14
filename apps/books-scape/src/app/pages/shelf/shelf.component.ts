import { Component, Signal, inject } from '@angular/core';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';

@Component({
  selector: 'books-scape-shelf-page',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
})
export class ShelfPageComponent {
  public readonly shelf: Signal<Book[]>;

  constructor() {
    this.shelf = inject(AppStore).shelfEntities;
  }
}
