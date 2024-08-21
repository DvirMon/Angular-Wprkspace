import { computed, Directive, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgControl, ValidationErrors } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Activity } from '../../places/places.model';
import { MatOption } from '@angular/material/core';
import { compareString } from './form.validators';

@Directive({
  selector: '[toDisableIfMaxSelected]',
  standalone: true,
})
export class DisableIfMaxSelectedDirective {
  #control = inject(NgControl);

  #option = inject(MatOption);

  value = input.required<Activity>();

  #isMaxSelection$: Observable<boolean> | undefined =
    this.#control.control?.statusChanges.pipe(
      startWith(this.#control.status),
      map(() => this.#control.errors),
      map((error: ValidationErrors | null) => {
        if (!error) {
          return false;
        }

        return error['maxSelection'];
      })
    );

  #isMaxSelection = toSignal(this.#isMaxSelection$ as Observable<boolean>, {
    initialValue: this.#control.valid as boolean,
  });

  #controlValue$ = this.#control.control?.valueChanges.pipe(
    map((activities: Activity[]) =>
      activities.map((value: Activity) => value.name)
    ),
    startWith(this.#control.value)
  );

  #controlValue = toSignal(this.#controlValue$ as Observable<string[]>, {
    initialValue: [],
  });

  #isOptionNotInclude = computed(
    () => !this.#controlValue().includes(this.value().name)
  );

  isDisabled = computed(
    () => this.#isMaxSelection() && this.#isOptionNotInclude()
  );

  constructor() {
    effect(() => {
      this.#option.disabled = this.isDisabled();
    });
  }

}
