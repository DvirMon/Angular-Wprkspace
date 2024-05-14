import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  contentChild,
  input,
  signal,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GridBaseColDef } from './models/gridColDef';
import { GridRowModes } from './models/gridRows';
import { ActionCellDirective } from './table-action-cell/table-cell-action.directive';
import { FormCellDirective } from './table-form-cell/table-cell-form.directive';

@Component({
  selector: 'dom-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  public actionColumn = contentChild(ActionCellDirective);

  public formColumn = contentChild(FormCellDirective);

  idKey = input<string>('id');

  dataSource = input.required<T[]>();

  columns = input.required<GridBaseColDef[]>();

  editRow = input<boolean>(false);

  rowModesModel = input<{ [key: string]: GridRowModes }>({});

  rowFormGroupModel: Signal<{ [key: string]: FormGroup }> = computed(() => {
    return Object.keys(this.rowModesModel()).reduce((acc, key) => {
      if (this.rowModesModel()[key] === GridRowModes.Edit) {
        acc[key] = new FormGroup({});
      }
      return acc;
    }, {} as { [key: string]: FormGroup });
  });

  public readonly tableColumns = this.computeTableColumns();
  public readonly displayedColumns = this.computeDisplayColumns();

  public readonly showEdit: WritableSignal<{ [key: string]: boolean }> = signal(
    {}
  );

  computeTableColumns() {
    return computed(() => {
      const columns = this.columns();

      const withEditColumn = this.editRow()
        ? [
            ...columns,
            {
              field: 'actions',
              type: 'actions',
            } as GridBaseColDef,
          ]
        : columns;

      return withEditColumn;
    });
  }

  computeDisplayColumns() {
    return computed(() => this.tableColumns().map((column) => column.field));
  }
}
