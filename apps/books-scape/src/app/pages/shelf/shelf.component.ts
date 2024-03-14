import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Book } from '../../books/books';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-shelf-page',
  standalone: true,
  imports: [TitleCasePipe, DashboardComponent],
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BookshelfPageComponent {
  public readonly bookshelf: Signal<Book[]>;

  constructor() {
    this.bookshelf = inject(AppStore).shelfEntities;
  }
}
