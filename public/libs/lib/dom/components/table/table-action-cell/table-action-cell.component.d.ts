import { OnInit, Signal } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableActionCellComponent implements OnInit {
    icon: import("@angular/core").InputSignal<string>;
    tooltip: import("@angular/core").InputSignal<string>;
    text: import("@angular/core").InputSignal<string>;
    isDisabled: import("@angular/core").InputSignal<boolean>;
    isIconButton: Signal<boolean>;
    actionClicked: import("@angular/core").OutputEmitterRef<void>;
    ngOnInit(): void;
    onActionButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableActionCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableActionCellComponent, "dom-table-actions-cell", never, { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "tooltip": { "alias": "tooltip"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "isDisabled": { "alias": "isDisabled"; "required": false; "isSignal": true; }; }, { "actionClicked": "actionClicked"; }, never, never, true, never>;
}
