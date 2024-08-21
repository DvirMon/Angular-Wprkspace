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
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { EditPlacesService } from '../../pages/edit_places/edit-places.service';
import { Activity, DestinationItem, Places } from '../../places/places.model';
import { PlaceFormService } from './place-form.service';
import { compareString } from './form.validators';

type PlaceForm = {
  destination: FormGroup<{
    city: FormControl<string>;
    country: FormControl<string>;
  }>;
  price: FormControl<number>;
  takeoff: FormControl<Timestamp>;
  landing: FormControl<Timestamp>;
  imageUrl: FormControl<string>;
  activities: FormControl<string[]>;
  rating: FormControl<number>;
};

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
  #placeFormService = inject(PlaceFormService);

  place = input.required<Partial<Places>>();

  placesForm: FormGroup<PlaceForm> = this.#placeFormService.getPlaceFormGroup();

  countriesOptions = this.#placeFormService.getCountriesOptions();

  #currentCountry$ = this.#placeFormService.getCountryValueChanges$(
    this.placesForm
  );

  citiesOptions = this.#placeFormService.getCitiesOptions(
    this.#currentCountry$
  );

  activitiesOptions = this.#placeFormService.getActivitiesOptions();

  ngOnInit(): void {
    this.placesForm.setValue(this.place() as Places);
  }

  onSubmit(): void {
    console.log('submit', this.placesForm.value);
  }

  onFileSelected(event: unknown): void {}

  compareWithCountries(o1: string, o2: string): boolean {
    return compareString(o1, o2);
  }
  compareCitiesWith(o1: string, o2: string): boolean {
    return compareString(o1, o2);
  }

  compareActivitiesWith(o1: Activity, o2: string): boolean {
    return compareString(o1.name, o2);
  }

 }
