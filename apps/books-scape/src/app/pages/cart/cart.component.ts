import { Component, Signal, inject } from '@angular/core';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-cart',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public readonly cart: Signal<Book[]>;

  constructor() {
    this.cart = inject(AppStore).cart;
  }
}
