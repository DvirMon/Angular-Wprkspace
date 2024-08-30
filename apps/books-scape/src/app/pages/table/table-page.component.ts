import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { LayoutComponent } from '../../layout/layout.component';

import { COLUMNS, ELEMENT_DATA, PeriodicElement } from './data.t';
import {
  TableComponent,
  TableActionCellComponent,
  ActionCellDirective,
  FormCellDirective,
  TableFormCellComponent,
  GridBaseColDef,
  GridRowModes,
} from '@dom/components/table';

@Component({
  selector: 'books-scape-page-table',
  standalone: true,
  imports: [
    JsonPipe,
    LayoutComponent,
    TableComponent,
    TableActionCellComponent,
    ActionCellDirective,
    FormCellDirective,
    TableFormCellComponent,
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
