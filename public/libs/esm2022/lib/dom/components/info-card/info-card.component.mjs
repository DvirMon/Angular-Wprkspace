import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
export class InfoCardComponent {
    constructor() {
        this.icon = 'attach_email'; // Default icon value if not provided
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: InfoCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.2", type: InfoCardComponent, isStandalone: true, selector: "dom-info-card", inputs: { text: "text", icon: "icon" }, ngImport: i0, template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, isInline: true, styles: ["@mixin flex-center($direction: row,$gap: 1){display: flex; flex-direction: $direction; justify-content: center; align-items: center; gap: #{$gap * 8 + \"px\"};}section.info-card-wrapper{@include flex-center(column,2);}section.info-card-wrapper mat-icon{scale:2}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: InfoCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-info-card', standalone: true, imports: [MatIconModule], template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, styles: ["@mixin flex-center($direction: row,$gap: 1){display: flex; flex-direction: $direction; justify-content: center; align-items: center; gap: #{$gap * 8 + \"px\"};}section.info-card-wrapper{@include flex-center(column,2);}section.info-card-wrapper mat-icon{scale:2}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQWdDdkQsTUFBTSxPQUFPLGlCQUFpQjtJQTlCOUI7UUFnQ1csU0FBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLHFDQUFxQztLQUN0RTs4R0FIWSxpQkFBaUI7a0dBQWpCLGlCQUFpQixpSEExQmxCOzs7OztHQUtULGdWQU5TLGFBQWE7OzJGQTJCWixpQkFBaUI7a0JBOUI3QixTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMsWUFDZDs7Ozs7R0FLVDs4QkFzQlEsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG9tLWluZm8tY2FyZCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRJY29uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImluZm8tY2FyZC13cmFwcGVyXCI+XG4gICAgICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCI+e3sgaWNvbiB9fTwvbWF0LWljb24+XG4gICAgICA8c3BhbiBjbGFzcz1cImluZm8tY2FyZC10ZXh0XCI+e3sgdGV4dCB9fTwvc3Bhbj5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG5cbiAgc3R5bGVzOiBgXG4gIFxuICAgIEBtaXhpbiBmbGV4LWNlbnRlcigkZGlyZWN0aW9uOiByb3csICRnYXA6IDEpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAjeyRnYXAgKiA4ICsgXCJweFwifTsgXG4gIH1cblxuICBzZWN0aW9uLmluZm8tY2FyZC13cmFwcGVyIHtcblxuICBAaW5jbHVkZSBmbGV4LWNlbnRlcihjb2x1bW4sIDIpO1xuXG4gICAgbWF0LWljb24geyBzY2FsZTogMjsgfVxufVxuXG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEluZm9DYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGV4dCE6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbiA9ICdhdHRhY2hfZW1haWwnOyAvLyBEZWZhdWx0IGljb24gdmFsdWUgaWYgbm90IHByb3ZpZGVkXG59XG4iXX0=