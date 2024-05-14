import { EventEmitter, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { OptionContentDirective } from '../../../directives';
import * as i0 from "@angular/core";
export declare class AutocompleteComponent<T> {
    #private;
    label: import("@angular/core").InputSignal<string>;
    defaultValue: import("@angular/core").InputSignal<string | undefined>;
    options: import("@angular/core").InputSignal<T[]>;
    control: import("@angular/core").InputSignal<FormControl<unknown>>;
    optionTemplate: import("@angular/core").InputSignal<TemplateRef<unknown> | undefined>;
    optionContentDirective: OptionContentDirective;
    displayFn: (option: T) => string;
    queryChanged: EventEmitter<string>;
    optionSelected: EventEmitter<T>;
    private onTermChanged;
    constructor();
    onOptionSelected(event: MatAutocompleteSelectedEvent): void;
    onInputChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent<any>, "dom-autocomplete", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "defaultValue": { "alias": "defaultValue"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": true; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; "optionTemplate": { "alias": "optionTemplate"; "required": false; "isSignal": true; }; "displayFn": { "alias": "displayFn"; "required": false; }; }, { "queryChanged": "queryChanged"; "optionSelected": "optionSelected"; }, ["optionContentDirective"], never, true, never>;
}
