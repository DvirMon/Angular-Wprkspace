import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-places-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './places-table.component.html',
  styleUrl: './places-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesTableComponent {}
