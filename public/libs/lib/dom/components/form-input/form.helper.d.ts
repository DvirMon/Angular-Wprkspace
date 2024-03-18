import { Injector, Signal, WritableSignal } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
export interface FormServerError {
    control: string;
    message: string;
}
export declare function getFormKeys(obj: FormGroup): WritableSignal<string[]>;
export declare enum FormErrorType {
    Required = "required",
    Pattern = "pattern",
    EmailPattern = "email",
    Server = "serverError"
}
export declare const errorMessageMap: ValidationErrors;
export declare function setFormError(group: FormGroup, error: FormServerError): void;
export declare function handleServerErrorEffect(injector: Injector, serverError: Signal<FormServerError | undefined>, form: FormGroup): void;
