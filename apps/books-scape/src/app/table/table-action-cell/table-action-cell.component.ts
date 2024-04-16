import { Component, OnInit, Signal, computed, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

// export interface ButtonActionState {
//   editState?: ActionState;
//   deleteState?: ActionState;
// }

@Component({
  selector: 'table-actions-cell',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconButton, MatTooltip, MatIcon],
  templateUrl: './table-action-cell.component.html',
  styleUrls: ['./table-action-cell.component.scss'],
})
export class TableActionCellComponent implements OnInit {
  icon = input<string>('');
  tooltip = input<string>('');
  text = input<string>('');

  isDisabled = input<boolean>(false);

  isIconButton!: Signal<boolean>;

  ngOnInit(): void {
    this.isIconButton = computed(() => !!this.icon());
  }

  onActionButtonClick() {}
}
