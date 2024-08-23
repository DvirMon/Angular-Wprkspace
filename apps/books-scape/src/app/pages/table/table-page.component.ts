import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { LayoutComponent } from '../../layout/layout.component';

import {
  ActionCellDirective,
  FormCellDirective,
  GridBaseColDef,
  GridRowModes,
  TableActionCellComponent,
  TableComponent,
  TableFormCellComponent,
} from '@dom/components';
import { COLUMNS, ELEMENT_DATA, PeriodicElement } from './data.t';


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
