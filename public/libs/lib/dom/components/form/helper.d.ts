import { Injector, Signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormServerError } from './types';
export declare function getFormKeys<T>(obj: FormGroup): WritableSignal<(keyof T)[]>;
export declare function createValueChangesEmitter(valueChanged: (value: string) => void): ((input: string | Observable<string> | Signal<string>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
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
export declare function handleServerErrorEffect(injector: Injector, serverError: Signal<FormServerError | undefined>, form: FormGroup): void;
export declare function getInputErrorMessage(errors: ValidationErrors, messages: ValidationErrors | undefined): string;
export declare function createErrorMessageEmitter(injector: Injector, messages: ValidationErrors | undefined, updater: (value: string) => void): (source$: Observable<ValidationErrors | null>) => void;
export declare function handleError(control: FormControl, emitter: (source$: Observable<ValidationErrors | null>) => void): void;
export declare function withError(): {
    handleError: typeof handleError;
    createErrorMessageEmitter: typeof createErrorMessageEmitter;
};
