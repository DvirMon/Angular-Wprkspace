import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { LayoutComponent } from '../../layout/layout.component';
import { TableComponent } from '../../table/table.component';
import { GridBaseColDef } from '../../table/types/column';
import { COLUMNS, ELEMENT_DATA, PeriodicElement } from './data.t';
import { TableActionCellComponent } from '../../table/table-action-cell/table-action-cell.component';

@Component({
  selector: 'books-scape-page-table',
  standalone: true,
  imports: [
    JsonPipe,
    LayoutComponent,
    TableComponent,
    TableActionCellComponent,
  ],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePageComponent {
  public readonly data = toSignal(this.getData(), { initialValue: [] });

  public readonly displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
  ];

  public readonly columns: GridBaseColDef[] = COLUMNS;

  getData(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }
}
