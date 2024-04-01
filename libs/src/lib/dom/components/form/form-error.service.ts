import { Injectable, Injector, runInInjectionContext } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FormControl, ValidationErrors } from '@angular/forms';
import { map, tap, startWith } from 'rxjs/operators';
import { errorMessageMap } from './constants';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor(private injector: Injector) {}

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
}
