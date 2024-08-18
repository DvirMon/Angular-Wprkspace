import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-edit-places-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit_places_form.component.html',
  styleUrl: './edit_places_form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPlacesFormComponent {}
