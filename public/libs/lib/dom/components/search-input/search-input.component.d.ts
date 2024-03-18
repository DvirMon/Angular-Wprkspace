import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SearchResultsData {
    totalResults: number;
}
export declare class SearchInputComponent implements OnInit {
    initialValue: import("@angular/core").InputSignal<string | undefined>;
    searchResultsData: import("@angular/core").InputSignal<SearchResultsData | undefined>;
    searchControl: FormControl<string>;
    termChanged: EventEmitter<string>;
    private onTermChanged;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchInputComponent, "dom-search-input", never, { "initialValue": { "alias": "initialValue"; "required": false; "isSignal": true; }; "searchResultsData": { "alias": "searchResultsData"; "required": false; "isSignal": true; }; }, { "termChanged": "termChanged"; }, never, never, true, never>;
}
