import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export type Side = "left" | "right" | {
    error: string;
};
export declare class FloatingButtonComponent {
    side: import("@angular/core").InputSignal<Side>;
    label: import("@angular/core").InputSignal<string | undefined>;
    routerLink: import("@angular/core").InputSignal<string | undefined>;
    clicked: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FloatingButtonComponent, "dom-floating-button", never, { "side": { "alias": "side"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "routerLink": { "alias": "routerLink"; "required": false; "isSignal": true; }; }, { "clicked": "clicked"; }, never, never, true, never>;
}
