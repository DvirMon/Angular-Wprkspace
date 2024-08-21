import { JsonPipe, NgFor, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Timestamp } from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { distinctUntilChanged } from 'rxjs';
import { EditPlacesService } from '../../pages/edit_places/edit-places.service';
import { DestinationItem, Places } from '../../places/places.model';
import { PlaceForm, PlaceFormService } from './place-form.service';

@Component({
  selector: 'to-edit-places-form',
  standalone: true,
  imports: [
    NgFor,
    JsonPipe,
    TitleCasePipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './edit_places_form.component.html',
  styleUrl: './edit_places_form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlaceFormService],
})
export class EditPlacesFormComponent implements OnInit {
  #editService = inject(EditPlacesService);
  #placeFormService = inject(PlaceFormService);

  place = input.required<Partial<Places>>();

  placesForm: FormGroup<PlaceForm> = this.#placeFormService.setPlaceFormGroup();

  destinations = toSignal(this.#editService.loadDestinationList(), {
    initialValue: [],
  });

  countriesOptions = computed(() =>
    this.destinations().map((des) => des.country)
  );

  currentCountry$ =
    this.placesForm.controls.destination.controls.country.valueChanges.pipe(
      distinctUntilChanged()
    );

  currentCountry = toSignal(this.currentCountry$, { initialValue: 'russia' });

  citiesOptions = computed(() => {
    const found = this.destinations().find(
      (des: DestinationItem) =>
        des.country.toLowerCase() === this.currentCountry()
    );

    return found ? found.cities : [];
  });

  ngOnInit(): void {
    this.placesForm.setValue(this.place() as Places);
  }

  onSubmit(): void {
    console.log('submit', this.placesForm.value);
  }

  onFileSelected(event: unknown): void {}


  compareWithCountries(o1: string, o2: string): boolean {
    return o1.toLowerCase() === o2.toLowerCase();
  }
  compareCitiesWith(o1: string, o2: string): boolean {
    return o1.toLowerCase().trim() === o2.toLowerCase();
  }
}
