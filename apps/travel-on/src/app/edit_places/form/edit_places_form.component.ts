import { JsonPipe, NgFor, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
  untracked,
} from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
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
import { Destination, Places } from '../../places/places.model';
import { EditPlacesService } from '../../pages/edit_places/edit-places.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, distinctUntilKeyChanged, map, of, startWith } from 'rxjs';

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
  #fb = inject(FormBuilder);
  editService = inject(EditPlacesService);

  place = input.required<Partial<Places>>();

  placesForm: FormGroup = this.#setPlaceFormGroup();

  destinations = toSignal(this.editService.loadDestinationList(), {
    initialValue: [],
  });

  countriesOptions = computed(() =>
    this.destinations().map((des) => des.country)
  );

  currentCountry$ = this.placesForm.controls['destination'].valueChanges.pipe(
    distinctUntilKeyChanged('country'),
    map((des: Destination) => des.country.toLowerCase())
  );

  currentCountry = toSignal(this.currentCountry$, { initialValue: 'russia' });

  citiesOptions = computed(() => {


    const found = this.destinations().find(
      (des: Destination) => des.country.toLowerCase() === this.currentCountry()
    );

    return found ? [found.city] : ['test'];
  });

  ngOnInit(): void {
    this.placesForm.setValue(this.place());
  }

  onSubmit(): void {
    console.log('submit', this.placesForm.value);
  }

  onFileSelected(event: unknown): void {}

  #setPlaceFormGroup() {
    return this.#fb.group({
      destination: this.#fb.group({
        city: [''],
        country: [''],
      }),
      price: [0, [Validators.required, Validators.min(0)]],
      takeoff: [new Timestamp(0, 0), Validators.required],
      landing: [new Timestamp(0, 0), Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      activities: [[]],
      rating: [null, [Validators.min(0), Validators.max(5)]],
    });
  }

  compareWith(o1: string, o2: string): boolean {
    return o1.toLowerCase() === o2.toLowerCase();
  }
  compareCitiesWith(o1: string, o2: string): boolean {
    return o1.toLowerCase().trim() === o2.toLowerCase();
  }
}
