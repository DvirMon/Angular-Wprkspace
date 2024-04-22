import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  input,
  model,
} from '@angular/core';
import {
  ActionCellDirective,
  GridRowModes,
  TableActionCellComponent,
} from '@dom';
import { PeriodicElement } from '../../pages/table/data.t';

@Component({
  selector: 'books-scape-table-actions',
  standalone: true,
  imports: [NgIf, ActionCellDirective, TableActionCellComponent],
  templateUrl: './table-actions.component.html',
  styleUrl: './table-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableActionsComponent {
  element = input.required<PeriodicElement>();
  rowModesModel = model.required<{ [key: string]: GridRowModes }>()

  onEdit(element: PeriodicElement) {
    this.rowModesModel.update((value) => ({
      ...value,
      [element.position]: GridRowModes.Edit,
    }));
  }

  onSave(element: PeriodicElement) {
    this.rowModesModel.update((value) => ({
      ...value,
      [element.position]: GridRowModes.View,
    }));
  }
}
