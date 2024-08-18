import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Places } from '../../places/places.model';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'to-edit-places-form',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './edit_places_form.component.html',
  styleUrl: './edit_places_form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPlacesFormComponent {
  #fb = inject(FormBuilder);

  place = input.required<Partial<Places>>();

  placesForm: FormGroup = this.#fb.group({
    destination: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    takeoff: [new Timestamp(0, 0), Validators.required],
    landing: [new Timestamp(0, 0), Validators.required],
    imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    activities: [[]],
    rating: [null, [Validators.min(0), Validators.max(5)]],
  });

  onSubmit(): void {}

  onFileSelected(event : unknown): void {}
}
