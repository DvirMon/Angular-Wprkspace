import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SearchMediaResultsData {
    totalMediaResults: number;
}
export declare class SearchInputComponent {
    control: import("@angular/core").InputSignal<FormControl<string>>;
    label: import("@angular/core").InputSignal<string | undefined>;
    initialValue: import("@angular/core").InputSignal<string | undefined>;
    valueChanged: EventEmitter<string>;
    private handleValueChanges;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchInputComponent, "dom-search-input", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "initialValue": { "alias": "initialValue"; "required": false; "isSignal": true; }; }, { "valueChanged": "valueChanged"; }, never, never, true, never>;
}
