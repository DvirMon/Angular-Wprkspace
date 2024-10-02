import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { AppStore } from '../../store/store';
import { createValueChangesEmitter } from '@dom/components/form/helpers';
import { SearchInputComponent } from '@dom/components/form/inputs/form-search-input';

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
