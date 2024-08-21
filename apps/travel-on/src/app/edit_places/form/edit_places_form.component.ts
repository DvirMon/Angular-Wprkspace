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
  Validators
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
}

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
})
export class EditPlacesFormComponent implements OnInit {
  #nfb = inject(NonNullableFormBuilder);
  editService = inject(EditPlacesService);

  place = input.required<Partial<Places>>();

  placesForm: FormGroup<PlaceForm> = this.#setPlaceFormGroup();

  destinations = toSignal(this.editService.loadDestinationList(), {
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

  #setPlaceFormGroup(): FormGroup<PlaceForm> {
    return this.#nfb.group({
      destination: this.#nfb.group({
        city: this.#nfb.control<string>(''),
        country: this.#nfb.control<string>(''),
      }),
      price: this.#nfb.control<number>(0, [
        Validators.required,
        Validators.min(0),
      ]),
      takeoff: this.#nfb.control<Timestamp>(new Timestamp(0, 0), [
        Validators.required,
      ]),
      landing: this.#nfb.control<Timestamp>(new Timestamp(0, 0), [
        Validators.required,
      ]),
      imageUrl: this.#nfb.control<string>('', [
        Validators.required,
        Validators.pattern('https?://.+'),
      ]),
      activities: this.#nfb.control<string[]>([]),
      rating: this.#nfb.control(0, [Validators.min(0), Validators.max(5)]),
    });
  }

  compareWithCountries(o1: string, o2: string): boolean {
    return o1.toLowerCase() === o2.toLowerCase();
  }
  compareCitiesWith(o1: string, o2: string): boolean {
    return o1.toLowerCase().trim() === o2.toLowerCase();
  }
}
