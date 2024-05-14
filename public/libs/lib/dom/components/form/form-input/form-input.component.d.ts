import { EventEmitter, OnInit, Signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormInputComponent implements OnInit {
    #private;
    control: import("@angular/core").InputSignal<AbstractControl<unknown, unknown> | null>;
    key: import("@angular/core").InputSignal<string>;
    type: import("@angular/core").InputSignal<string | undefined>;
    label: import("@angular/core").InputSignal<string | undefined>;
    hint: import("@angular/core").InputSignal<string | undefined>;
    messagesMap: import("@angular/core").InputSignal<ValidationErrors | undefined>;
    formControl: Signal<FormControl<unknown>>;
    message: WritableSignal<string>;
    blurChanged: EventEmitter<FormControl<any>>;
    ngOnInit(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormInputComponent, "dom-form-input", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "key": { "alias": "key"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "messagesMap": { "alias": "messagesMap"; "required": false; "isSignal": true; }; }, { "blurChanged": "blurChanged"; }, never, never, true, never>;
}
