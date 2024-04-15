import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  computed,
  input,
  signal,
} from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GridBaseColDef } from './types/column';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'books-scape-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  idKey = input<string>('id');

  dataSource = input.required<T[]>();

  columns = input.required<GridBaseColDef[]>();

  editRow = input<boolean>(false);

  public readonly tableColumns = this.computeTableColumns();
  public readonly displayedColumns = this.computeDisplayColumns();

  public readonly showEdit: WritableSignal<{ [key: string]: boolean }> = signal(
    {}
  );

  computeTableColumns() {
    return computed(() => {
      const columns = this.columns();

      const withEditColumn = this.editRow()
        ? [...columns, { field: 'editable', type: 'actions' } as GridBaseColDef]
        : columns;

      return withEditColumn;
    });
  }

  computeDisplayColumns() {
    return computed(() => this.tableColumns().map((column) => column.field));
  }

  onEdit(key: string) {
    this.showEdit.update((value) => ({ ...value, [key]: !value[key] }));
  }
}
