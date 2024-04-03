import { Component } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'books-scape-filters',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersPageComponent {}
