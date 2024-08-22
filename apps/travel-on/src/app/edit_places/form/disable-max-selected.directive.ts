import {
  computed,
  Directive,
  effect,
  inject,
  Input,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { Activity } from '../../places/places.model';

@Directive({
  selector: '[toDisableIfMaxSelected]',
  standalone: true,
})
export class DisableIfMaxSelectedDirective<T> {
  #control = inject(NgControl);

  #option = inject(MatOption);

  value = input.required<T>();

  @Input() compareCallback!: (value: T, selectedValues: T[]) => boolean;

  #isMaxSelection$: Observable<boolean> | undefined =
    this.#control.control?.statusChanges.pipe(
      startWith(this.#control.status),
      map(() => this.#control.errors),
      map(() => this.#control.errors?.['maxSelection'] ?? false)
    );

  #isMaxSelection = toSignal(this.#isMaxSelection$ as Observable<boolean>, {
    initialValue: this.#control.valid as boolean,
  });

  #controlValue$ = this.#control.control?.valueChanges.pipe(
    startWith(this.#control.value)
  );

  #controlValue = toSignal(this.#controlValue$ as Observable<T[]>, {
    initialValue: [],
  });

  #isOptionNotIncluded = computed(
    () => !this.compareCallback(this.value(), this.#controlValue())
  );

  isDisabled = computed(
    () => this.#isMaxSelection() && this.#isOptionNotIncluded()
  );

  constructor() {
    effect(() => {
      this.#option.disabled = this.isDisabled();
    });
  }
}
