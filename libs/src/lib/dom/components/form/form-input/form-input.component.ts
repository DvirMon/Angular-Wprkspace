import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
  Signal,
  computed,
  inject,
  input,
  runInInjectionContext,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith, tap } from 'rxjs';
import { errorMessageMap } from '../constants';

@Component({
  selector: 'dom-form-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  private readonly _injector: Injector = inject(Injector);

  control = input.required<AbstractControl<unknown, unknown> | null>();
  key = input.required<string>();
  type = input<string>();
  label = input<string>();
  hint = input<string>();
  errorsMap = input<ValidationErrors>();

  formControl =  computed(() => this.control() as FormControl);
  errorMessage!: Signal<string | undefined>;
  hasError!: Signal<boolean>;

  @Output() blurChanged = new EventEmitter<FormControl>();

  

  ngOnInit(): void {
    this.formControl = computed(() => this.control() as FormControl);
    this.hasError = this._setHasErrorSignal(this.formControl());
    this.errorMessage = this._setErrorMessageSignal(this.formControl());

  }

  private _setErrorMessageSignal(formControl: FormControl): Signal<string> {
    return runInInjectionContext(this._injector, () =>
      toSignal(this._setErrorMessageObservable(formControl), {
        initialValue: this._getErrorMessage(formControl),
      })
    );
  }

  private _setHasErrorSignal(formControl: FormControl): Signal<boolean> {
    return runInInjectionContext(this._injector, () =>
      toSignal(
        this._setHasErrorObservable(formControl).pipe(
          tap((value) => console.log(value))
        ),
        {
          initialValue: false,
        }
      )
    );
  }

  private _setErrorMessageObservable(
    formControl: FormControl
  ): Observable<string> {
    return formControl.statusChanges.pipe(
      map(() => this._getErrorMessage(formControl)),
    );
  }

  private _setHasErrorObservable(
    formControl: FormControl
  ): Observable<boolean> {
    return formControl.statusChanges.pipe(
      // startWith(formControl.status),
      map(() => formControl.errors),
      map((errors: ValidationErrors | null) => !!errors)
    );
  }

  // handle input error messages
  private _getErrorMessage(control: FormControl | AbstractControl): string {
    const errors = { ...control.errors };

    if (errors) {
      const errorKeys: string[] = Object.keys(errors as object);

      for (const error of errorKeys) {
        if (control.hasError(error)) {
          const errorMap = {
            ...errors,
            ...errorMessageMap,
            ...this.errorsMap(),
          };

          console.log(errorMap)

          return errorMap[error] as string;
        }
      }
    }

    return '';
  }

  onBlur() {
    this.blurChanged.emit(this.formControl());
  }
}
