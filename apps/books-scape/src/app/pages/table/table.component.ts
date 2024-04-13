import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'books-scape-table',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}
