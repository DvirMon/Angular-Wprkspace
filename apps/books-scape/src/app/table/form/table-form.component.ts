import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'books-scape-table-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-form.component.html',
  styleUrl: './table-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFormComponent {}
