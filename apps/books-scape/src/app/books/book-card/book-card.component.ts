import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TruncatePipe } from 'src/app/shared/truncate.pipe';
import { Book } from '../books';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, NgOptimizedImage, TruncatePipe],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input({ required: true }) book!: Book;
  @Input() cartFlag = false;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter();

  onAddToCart(value: Book) {
    this.addToCart.emit(value)
  }

}
