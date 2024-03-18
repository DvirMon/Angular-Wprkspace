import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/divider";
export class DividerHeaderComponent {
    constructor() {
        this.label = "Hallow";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DividerHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: DividerHeaderComponent, isStandalone: true, selector: "dom-divider-header", inputs: { label: "label" }, ngImport: i0, template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, isInline: true, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DividerHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-divider-header', standalone: true, imports: [CommonModule, MatDividerModule], template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"] }]
        }], propDecorators: { label: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9jb21wb25lbnRzL2RpdmlkZXItaGVhZGVyL2RpdmlkZXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWlDN0QsTUFBTSxPQUFPLHNCQUFzQjtJQS9CbkM7UUFpQzZCLFVBQUssR0FBRyxRQUFRLENBQUE7S0FFNUM7OEdBSlksc0JBQXNCO2tHQUF0QixzQkFBc0IsMEdBM0J2Qjs7Ozs7O0dBTVQseVBBUFMsWUFBWSw4QkFBRSxnQkFBZ0I7OzJGQTRCN0Isc0JBQXNCO2tCQS9CbEMsU0FBUzsrQkFDRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLFlBQy9COzs7Ozs7R0FNVCxtQkFrQmdCLHVCQUF1QixDQUFDLE1BQU07OEJBS3BCLEtBQUs7c0JBQS9CLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvbS1kaXZpZGVyLWhlYWRlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGl2aWRlclwiPlxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICAgIDxzcGFuPiB7eyBsYWJlbCB9fSA8L3NwYW4+XG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDwvc2VjdGlvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYHNlY3Rpb24uZGl2aWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF0LWRpdmlkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW46OHB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9IGBcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcblxufSlcbmV4cG9ydCBjbGFzcyBEaXZpZGVySGVhZGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBsYWJlbCA9IFwiSGFsbG93XCJcblxufVxuIl19