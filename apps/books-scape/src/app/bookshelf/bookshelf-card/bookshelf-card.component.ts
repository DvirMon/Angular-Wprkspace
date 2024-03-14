import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'books-scape-bookshelf-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookshelf-card.component.html',
  styleUrl: './bookshelf-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookshelfCardComponent {}
