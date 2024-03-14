import { Component, Signal, inject } from '@angular/core';
import { Book } from '../../books/books';
import { AppStore } from '../../store/store';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';

@Component({
  selector: 'books-scape-checkout',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutPageComponent {
  public readonly cart: Signal<Book[]>;

  constructor() {
    this.cart = inject(AppStore).cart;
  }
}
