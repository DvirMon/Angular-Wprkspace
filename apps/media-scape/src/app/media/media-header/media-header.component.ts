import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { SearchInputComponent, createValueChangesEmitter } from '@dom';
import { AppStore } from '../../store/store';

@Component({
  selector: 'ms-media-header',
  standalone: true,
  imports: [
    NgIf,
    MatToolbar,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    SearchInputComponent,
  ],
  templateUrl: './media-header.component.html',
  styleUrl: './media-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaHeaderComponent {
  #store = inject(AppStore);
  
  #handleValueChanges = createValueChangesEmitter((value) =>
  this.#store.updateSearchTerm(value)
  );

  searchControl = new FormControl<string>('', { nonNullable: true });

  constructor() {
    this.#handleValueChanges(this.searchControl.valueChanges);
  }

  onClear(): void {
    this.searchControl.reset();
    this.#store.clearFilters();
  }

  onRefresh(): void {
    this.onClear();
    this.#store.refreshMedia();
  }

  onSort(): void {
    this.#store.updateSort();
  }
}
