import { Component, Signal, inject } from '@angular/core';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';

@Component({
  selector: 'books-scape-basket',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketPageComponent {
  public readonly basket: Signal<Book[]>;

  constructor() {
    this.basket = inject(AppStore).booksEntities;
  }
}
