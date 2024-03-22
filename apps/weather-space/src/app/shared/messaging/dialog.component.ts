import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { DialogData, DialogType } from './message';

@Component({
  template: `
    <header>
      <mat-icon color="primary" [fontIcon]="icons[data.type]"></mat-icon>
      <span>
        {{ data.type | titlecase }}
      </span>
    </header>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button>OK</button>
    </mat-dialog-actions>
  `,
  styles: `

  header {
  display: flex;
  flex-direction : column;
  align-items : center;
  padding-top :16px;
  gap: 16px;
}

`,
  standalone: true,
  imports: [
    TitleCasePipe,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatIcon,
  ],
})
export class DialogComponent {
  data: DialogData = inject(MAT_DIALOG_DATA);

  icons: Record<DialogType, string> = {
    [DialogType.CONFIRM]: 'task-info',
    [DialogType.ERROR]: 'task_alt',
    [DialogType.INFO]: 'info',
  };
}
