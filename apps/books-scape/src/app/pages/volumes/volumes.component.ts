import {
  Component,
  InjectionToken,
  Injector,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';

import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchInputComponent } from '@dom/components';
import { BookCardComponent } from '../../books/book-card/book-card.component';
import { Book } from '../../books/books';
import { LayoutComponent } from '../../layout/layout.component';
import { AppStore } from '../../store/store';
import { VolumesDataService } from '../../books/data.service';
import { map, Observable, Unsubscribable } from 'rxjs';

export interface VolumesStore {
  volumesEntities: Signal<Book[]>;
  searchTerm: Signal<string>;
  updateVolumes: (
    input: string | Signal<string> | Observable<string>
  ) => Unsubscribable;
}

export const VOLUME_STORE = new InjectionToken<VolumesStore>('BOOK_STORE');

@Component({
  selector: 'books-scape-volume-page',
  standalone: true,
  imports: [
    JsonPipe,
    LayoutComponent,
    BookCardComponent,
    SearchInputComponent,
    AsyncPipe,
  ],
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss'],

  providers: [{ provide: VOLUME_STORE, useExisting: AppStore }],
})
export class VolumesPageComponent {
  #store = inject(VOLUME_STORE);
  #injector = inject(Injector);

  dataService = inject(VolumesDataService);

  searchControl = new FormControl<string>('angular', { nonNullable: true });

  public readonly books: Signal<Book[]>;
  public readonly initialValue: Signal<string>;

  volumes$ = this.dataService.loadVolumes('angular');

  length$ = this.volumes$.pipe(map((v) => !!v));

  constructor() {
    this.books = this.#store.volumesEntities;
    this.initialValue = this.#store.searchTerm;

  }
  onValueChanged(value: string): void {
    this.#store.updateVolumes(value);
  }

  // onAddToShelf(newBook: Book): void {
  //   this.#store.addToShelf(newBook);
  // }

  onInfo(volId: string): void {
    runInInjectionContext(this.#injector, () =>
      inject(Router).navigateByUrl(`info/${volId}`)
    );
  }
}
