import { Injector, Signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormServerError } from './types';
import * as i0 from '@angular/core';
export declare class FormErrorService {
  private injector;
  constructor(injector: Injector);
  errors: WritableSignal<ValidationErrors>;
  handleServerErrorEffect(
    serverError: Signal<FormServerError | undefined>,
    form: FormGroup
  ): void;
  private setFormError;
  createErrorMessageEmitter(
    messages: ValidationErrors | undefined,
    updater: (value: string) => void
  ): (source$: Observable<ValidationErrors | null>) => void;
  handleErrorMessage(
    control: FormControl,
    emitter: (source$: Observable<ValidationErrors | null>) => void
  ): void;
  private getInputErrorMessage;
  handleErrorMessageMap(group: FormGroup, messages: ValidationErrors): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<FormErrorService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<FormErrorService>;
}
