import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
export interface SearchMediaResultsData {
  totalMediaResults: number;
}
export declare class SearchInputComponent implements OnInit {
  initialValue: import('@angular/core').InputSignal<string | undefined>;
  searchMediaResultsData: import('@angular/core').InputSignal<
    SearchMediaResultsData | undefined
  >;
  searchControl: FormControl<string>;
  termChanged: EventEmitter<string>;
  private onTermChanged;
  constructor();
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<SearchInputComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    SearchInputComponent,
    'dom-search-input',
    never,
    {
      initialValue: { alias: 'initialValue'; required: false; isSignal: true };
      searchMediaResultsData: {
        alias: 'searchMediaResultsData';
        required: false;
        isSignal: true;
      };
    },
    { termChanged: 'termChanged' },
    never,
    never,
    true,
    never
  >;
}
