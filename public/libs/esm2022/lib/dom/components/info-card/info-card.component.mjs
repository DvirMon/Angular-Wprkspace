import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
export class InfoCardComponent {
    constructor() {
        this.icon = "attach_email"; // Default icon value if not provided
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InfoCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: InfoCardComponent, isStandalone: true, selector: "dom-info-card", inputs: { text: "text", icon: "icon" }, ngImport: i0, template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, isInline: true, styles: ["section.info-card-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}section.info-card-wrapper mat-icon{scale:2}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InfoCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-info-card", standalone: true, imports: [MatIconModule], template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, styles: ["section.info-card-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}section.info-card-wrapper mat-icon{scale:2}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQWV2RCxNQUFNLE9BQU8saUJBQWlCO0lBYjlCO1FBZVcsU0FBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLHFDQUFxQztLQUN0RTs4R0FIWSxpQkFBaUI7a0dBQWpCLGlCQUFpQixpSEFUbEI7Ozs7O0dBS1Qsc09BTlMsYUFBYTs7MkZBVVosaUJBQWlCO2tCQWI3QixTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMsWUFDZDs7Ozs7R0FLVDs4QkFLUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRvbS1pbmZvLWNhcmRcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mby1jYXJkLXdyYXBwZXJcIj5cbiAgICAgIDxtYXQtaWNvbiBjb2xvcj1cInByaW1hcnlcIj57eyBpY29uIH19PC9tYXQtaWNvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1jYXJkLXRleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcblxuICBzdHlsZVVybHM6IFtcIi4vaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRleHQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb24gPSBcImF0dGFjaF9lbWFpbFwiOyAvLyBEZWZhdWx0IGljb24gdmFsdWUgaWYgbm90IHByb3ZpZGVkXG59XG4iXX0=