import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { SearchInputComponent } from '@dom';
import { AppStore } from '../../store/store';

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

  searchControl = new FormControl<string>('', { nonNullable: true });

  onTermChanged(value: string): void {
    this.#store.updateSearchTerm(value);
  }

  onClear(): void {
    this.searchControl.reset();
  }

  onRefresh(): void {
    this.#store.loadMedia();
  }

  onSort(): void {
    this.#store.updateSort();
  }
}
