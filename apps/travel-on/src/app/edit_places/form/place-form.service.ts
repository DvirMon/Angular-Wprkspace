import { inject } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import {
  FormGroup,
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

export type PlaceForm = {
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

export class PlaceFormService {
  #nfb = inject(NonNullableFormBuilder);

  setPlaceFormGroup(): FormGroup<PlaceForm> {
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
}
