import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { SearchInputComponent } from '@dom';
import { AppStore } from '../../store/store';
import { MediaType } from '../../shared/types';

@Component({
  selector: 'ms-media-header',
  standalone: true,
  imports: [NgIf, MatToolbar, MatButton, SearchInputComponent],
  templateUrl: './media-header.component.html',
  styleUrl: './media-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaHeaderComponent {
  #store = inject(AppStore);

  searchControl: FormControl<string>;

  constructor() {
    this.searchControl = new FormControl<string>('', { nonNullable: true });
  }

  onTermChanged(value: string): void {
    this.#store.updateSearchTerm(value);
  }
  
  onClear(): void {
    this.searchControl.reset();
    this.#store.clearFilters();
  }

  onRefresh(): void {
    this.#store.loadMedia();
    this.onClear();
  }

  onSort(): void {
    this.#store.updateSort();
  }
}