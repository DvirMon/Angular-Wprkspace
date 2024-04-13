import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'books-scape-table',
  standalone: true,
  imports: [LayoutComponent, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  dataSource = input<T[]>([]);

  columnsDefs = input<(keyof T)[]>([]);

  // displayedColumns: Signal<string[]>;
  displayedColumns = this.computeDisplayColumns();

  computeDisplayColumns() {
    return computed(() =>
      this.dataSource().length > 0
        ? Object.keys(this.dataSource()[0] as object)
        : [...this.columnsDefs()]
    );
  }
}
