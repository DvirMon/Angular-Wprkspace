import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from '../../shared/truncate.pipe';
import { Book } from '../books';

@Component({
  selector: 'books-scape-book-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    TruncatePipe,
  ],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  book = input.required<Book>();
  cartFlag = input<boolean>(false);

  @Output() addToCart: EventEmitter<Book> = new EventEmitter();

  onAddToCart(value: Book) {
    this.addToCart.emit(value);
  }
}
