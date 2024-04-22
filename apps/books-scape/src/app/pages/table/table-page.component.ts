import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { LayoutComponent } from '../../layout/layout.component';

import {
  ActionCellDirective,
  TableFormCellComponent,
  GridBaseColDef,
  GridRowModes,
  TableActionCellComponent,
  TableComponent,
} from '@dom';
import { TableActionsComponent } from '../../table/actions/table-actions.component';
import { COLUMNS, ELEMENT_DATA, PeriodicElement } from './data.t';

// enum GridRowModes {
//   Edit = 'edit',
//   View = 'view',
// }
@Component({
  selector: 'books-scape-page-table',
  standalone: true,
  imports: [
    JsonPipe,
    LayoutComponent,
    TableComponent,
    TableActionCellComponent,
    ActionCellDirective,
    TableFormCellComponent,
    TableActionsComponent,
  ],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePageComponent {
  public readonly data = toSignal(this.getData(), { initialValue: [] });

  public readonly columns: GridBaseColDef[] = COLUMNS;

  getData(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }
  public readonly rowModesModel = signal<{ [key: string]: GridRowModes }>({});
}
