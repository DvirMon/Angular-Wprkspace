import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditPlacesFormComponent } from '../../edit_places/form/edit_places_form.component';
import { Places } from '../../places/places.model';

@Component({
  selector: 'to-edit-places',
  standalone: true,
  imports: [EditPlacesFormComponent],
  templateUrl: './edit_places.component.html',
  styleUrl: './edit_places.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPlacesPageComponent {


  placeItem: Partial< Places> = {}

}
