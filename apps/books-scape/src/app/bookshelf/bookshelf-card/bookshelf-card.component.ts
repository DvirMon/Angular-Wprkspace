import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Book } from '../../books/books';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'books-scape-bookshelf-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './bookshelf-card.component.html',
  styleUrl: './bookshelf-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfCardComponent {
  book = input.required<Book>();

  @Output() clearFromShelf: EventEmitter<Book> = new EventEmitter();

  onClear() {
    this.clearFromShelf.emit(this.book());
  }
}
