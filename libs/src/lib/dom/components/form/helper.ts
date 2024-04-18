import {
  Injector,
  Signal,
  WritableSignal,
  effect,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  pipe,
  startWith,
  tap,
} from 'rxjs';
import { FormServerError } from './types';
import { errorMessageMap } from './constants';

export function getFormKeys<T>(obj: FormGroup): WritableSignal<(keyof T)[]> {
  return signal(Object.keys(obj.controls) as (keyof T)[]);
}

export function createValueChangesEmitter(
  valueChanged: (value: string) => void
) {
  return rxMethod<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value) => valueChanged(value))
    )
  );
}

function setFormError(group: FormGroup, error: FormServerError): void {
  if (group !== null && error !== null) {
    const control = group.get(error.control as string);

    if (control != null) {
      control.setErrors({ serverError: error.message });
    }
  }
}

/**
 * Applies an effect to handle server errors by updating a form's errors.
 *
 * @param injector An Angular Injector instance.
 * @param serverError A Signal representing the server error.
 * @param form The FormGroup instance to which the server error will be applied.
 * @returns void
 *
 * @remarks
 * This function sets up an effect to handle server errors by updating the errors
 * of a FormGroup instance. When a server error is emitted via the provided
 * `serverError` signal, this effect will update the form's errors
 * accordingly.
 *
 * Example usage:
 * ```typescript
 * handleServerErrorEffect(injector, serverErrorSignal, myFormGroup);
 * ```
 */
export function handleServerErrorEffect(
  injector: Injector,
  serverError: Signal<FormServerError | undefined>,
  form: FormGroup
): void {
  effect(
    () => {
      const error = serverError();

      if (error) {
        setFormError(form, error);
      }
    },
    { allowSignalWrites: true, injector }
  );
}

export function getInputErrorMessage(
  errors: ValidationErrors,
  messages: ValidationErrors | undefined
): string {
  if (errors) {
    const errorKeys: string[] = Object.keys(errors);

    const errorMap = {
      ...errors,
      ...errorMessageMap,
      ...messages,
    };

    for (const error of errorKeys) {
      return errorMap[error];
    }
  }

  return '';
}

export function createErrorMessageEmitter(
  injector: Injector,
  messages: ValidationErrors | undefined,
  updater: (value: string) => void
): (source$: Observable<ValidationErrors | null>) => void {
  return runInInjectionContext(injector, () => {
    return rxMethod<ValidationErrors>(
      pipe(
        map((errors: ValidationErrors) =>
          getInputErrorMessage(errors, messages)
        ),
        tap((value: string) => updater(value))
      )
    );
  });
}

export function handleError(
  control: FormControl,
  emitter: (source$: Observable<ValidationErrors | null>) => void
) {
  const source$ = control.statusChanges.pipe(
    startWith(control.status),
    map(() => control.errors)
  );

  emitter(source$);
}

export function withError() {
  return { handleError, createErrorMessageEmitter };
}
