import {
  Injectable,
  Injector,
  Signal,
  WritableSignal,
  effect,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { errorMessageMap } from './constants';
import { FormServerError } from './types';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor(private injector: Injector) {}

  errors: WritableSignal<ValidationErrors> = signal({});

  handleServerErrorEffect(
    serverError: Signal<FormServerError | undefined>,
    form: FormGroup
  ): void {
    effect(
      () => {
        const error = serverError();

        if (error) {
          this.setFormError(form, error);
        }
      },
      { allowSignalWrites: true, injector: this.injector }
    );
  }

  private setFormError(group: FormGroup, error: FormServerError): void {
    if (group !== null && error !== null) {
      const control = group.get(error.control as string);

      if (control != null) {
        control.setErrors({ serverError: error.message });
      }
    }
  }

  /**
   * Creates an error message emitter function for a FormControl, allowing
   * dynamic updating of error messages.
   *
   * @param {ValidationErrors | undefined} messages - Validation error messages or undefined.
   * @param {(value: string) => void} errorMessageUpdater - Function to update error messages.
   * @returns {(source$: Observable<ValidationErrors | null>) => void} A function that handles error messages based on observable input.
   */

  createErrorMessageEmitter(
    messages: ValidationErrors | undefined,
    updater: (value: string) => void
  ): (source$: Observable<ValidationErrors | null>) => void {
    return runInInjectionContext(this.injector, () => {
      return rxMethod<ValidationErrors>(
        pipe(
          map((errors: ValidationErrors) =>
            this.getInputErrorMessage(errors, messages)
          ),
          tap((value: string) => updater(value))
        )
      );
    });
  }

  /**
   * Handles error messages for a FormControl by emitting a messages to a designated
   * handler function.
   *
   * @param {FormControl} control - The FormControl instance to monitor for errors.
   * @param {(source$: Observable<ValidationErrors | null>) => void} errorMessageEmitter - The error message emitter function.
   */

  handleErrorMessage(
    control: FormControl,
    emitter: (source$: Observable<ValidationErrors | null>) => void
  ) {
    const source$ = control.statusChanges.pipe(
      startWith(control.status),
      map(() => control.errors)
    );

    emitter(source$);
  }

  private getInputErrorMessage(
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

  handleErrorMessageMap(group: FormGroup, messages: ValidationErrors) {
    group.statusChanges.pipe(
      startWith(group.status),
      map(() => {
        const formKeys = Object.keys(group.controls);
        for (const key of formKeys) {
          const controlErrors = group.controls[key].errors;

          this.errors.update((value) => ({
            ...value,
            ...messages,
            [key]: { ...controlErrors },
          }));
        }
      })
    );
  }
}
