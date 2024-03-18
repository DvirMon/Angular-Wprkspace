import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class CardButtonComponent {
    label: import("@angular/core").InputSignal<string | undefined>;
    boldLabel: import("@angular/core").InputSignal<string | undefined>;
    routerLink: import("@angular/core").InputSignal<string | undefined>;
    clicked: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardButtonComponent, "dom-card-button", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "boldLabel": { "alias": "boldLabel"; "required": false; "isSignal": true; }; "routerLink": { "alias": "routerLink"; "required": false; "isSignal": true; }; }, { "clicked": "clicked"; }, never, never, true, never>;
}
