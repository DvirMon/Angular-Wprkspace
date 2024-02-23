import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from 'src/app/books/book-card/book-card.component';
import { StoreService } from 'src/app/shared/store.service';
import { Book } from 'src/app/books/books';

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
