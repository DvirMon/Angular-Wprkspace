import { ChangeDetectionStrategy, Component, input } from '@angular/core';
// import { QuestionGroupModel } from '../../../../form/models/question-group.model';
// import { QuestionBase } from '../../../../form/models/question.model';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'dom-table-form-cell',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './table-cell-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFormCellComponent {
  // public readonly group = input.required<FormGroup>();
  // public readonly columnDef = input.required<string>();
  // public readonly type = input.required<string>();
}
