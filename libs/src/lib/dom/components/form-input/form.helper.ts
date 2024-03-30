import {
  Injector,
  Signal,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  pipe,
  debounceTime,
  distinctUntilChanged,
  tap,
  Observable,
} from 'rxjs';

export interface FormServerError {
  control: string;
  message: string;
}

export function getFormKeys(obj: FormGroup): WritableSignal<string[]> {
  return signal(Object.keys(obj.controls));
}

export enum FormErrorType {
  Required = 'required',
  Pattern = 'pattern',
  EmailPattern = 'email',
  Server = 'serverError',
}

export const errorMessageMap: ValidationErrors = {
  required: 'required',
  pattern: 'invalid pattern',
  email: 'invalid email format',
};

export function setFormError(group: FormGroup, error: FormServerError): void {
  if (group !== null && error !== null) {
    const control = group.get(error.control as string);

    if (control != null) {
      control.setErrors({ serverError: error.message });
    }
  }
}

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

export function createValueChangesEmitter(
  // valueChanged: (value: string) => void
) {
  return rxMethod<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // tap((value) => valueChanged(value))
    )
  );
}
