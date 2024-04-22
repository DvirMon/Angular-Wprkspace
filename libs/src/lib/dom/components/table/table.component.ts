import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  Type,
  ViewContainerRef,
  WritableSignal,
  computed,
  contentChild,
  effect,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { GridBaseColDef } from './models/gridColDef';
import { GridRowModes } from './models/gridRows';
import { ActionCellDirective } from './table-action-cell/cell-action.directive';
import { TableFormCellComponent } from './table-form-cell/table-cell-form.component';
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
    FormCellDirective,
  ],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  public actionColumn = contentChild(ActionCellDirective);

  public formCell = contentChild(TableFormCellComponent);

  public formContainer = viewChild('formContainer', { read: ViewContainerRef });

  formComponent = signal<Type<TableFormCellComponent>>(
    {} as Type<TableFormCellComponent>
  );

  hasFormComponent = false;

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

  constructor() {
    effect(
      () => {
        if (this.formContainer()) {
          this.formContainer()?.createComponent<TableFormCellComponent>(
            TableFormCellComponent
          );
        }
      },
      { allowSignalWrites: true }
    );
  }

  loadComponent() {
    if (this.formContainer()) {
      console.log('this.formContainer()');

      this.formContainer()?.createComponent<TableFormCellComponent>(
        TableFormCellComponent
      );
    }
    // if (this.formCell() && this.formContainer()) {

    //   this.formComponent =
    //     componentRef?.instance as Type<TableFormCellComponent>;
  }

  computeTableColumns() {
    return computed(() => {
      const columns = this.columns();

      const withEditColumn = this.editRow()
        ? [
            ...columns,
            {
              field: 'editable',
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
