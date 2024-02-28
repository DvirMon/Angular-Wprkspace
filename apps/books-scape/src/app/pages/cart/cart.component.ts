import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { StoreService } from '../../shared/store.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public readonly cart: Signal<Book[]>

  constructor() {
    this.cart = inject(StoreService).selectCart;
  }

}
