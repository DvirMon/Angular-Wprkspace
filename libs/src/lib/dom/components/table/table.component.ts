import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  Signal,
  TemplateRef,
  ViewChild,
  WritableSignal,
  computed,
  contentChild,
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
export class TableComponent<T>  {
  public actionColumn = contentChild(ActionCellDirective);

  public formCell = viewChild(TableFormCellComponent);

  @ViewChild('dom-table-form-cell', { static: true, read: ElementRef })
  childContainer!: ElementRef;

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

  @Input() actionTemplate!: TemplateRef<unknown>;

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
