import { OnInit, Signal } from "@angular/core";
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class FormInputComponent implements OnInit {
    private readonly _injector;
    control: import("@angular/core").InputSignal<AbstractControl<unknown, unknown> | null>;
    key: import("@angular/core").InputSignal<string>;
    type: import("@angular/core").InputSignal<string | undefined>;
    label: import("@angular/core").InputSignal<string | undefined>;
    hint: import("@angular/core").InputSignal<string | undefined>;
    errorsMap: import("@angular/core").InputSignal<ValidationErrors | undefined>;
    formControl: Signal<FormControl>;
    errorMessage: Signal<string | undefined>;
    hasError: Signal<boolean>;
    ngOnInit(): void;
    private _setErrorMessageSignal;
    private _setErrorObservable;
    private _setHasErrorSignal;
    private _setHasErrorObservable;
    private _getErrorMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormInputComponent, "dom-form-input", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "key": { "alias": "key"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorsMap": { "alias": "errorsMap"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
