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

  handleError(
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

  handleErrorMap(group: FormGroup, messages: ValidationErrors) {
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
