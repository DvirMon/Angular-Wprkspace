import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { TableComponent } from './table.component';
import { GridBaseColDef } from './types/column';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const HEADERS: { [key: string]: string } = { position: 'No.' };

@Component({
  selector: 'books-scape-page-table',
  standalone: true,
  imports: [JsonPipe, LayoutComponent, TableComponent],
  templateUrl: './table-page.component.html',
  styleUrl: './table.component.css',
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

  public readonly columns: GridBaseColDef[] = this.displayedColumns.map(
    (field) => ({
      field,
      headerName: HEADERS[field],
      editable: true,
    })
  );

  getData(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }
}
