import { ChangeDetectionStrategy, Component, EventEmitter, Output, input, } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/button";
export class FloatingButtonComponent {
    constructor() {
        this.side = input("right");
        this.label = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FloatingButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.2", type: FloatingButtonComponent, isStandalone: true, selector: "dom-floating-button", inputs: { side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, isInline: true, styles: ["button{position:fixed;top:64px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FloatingButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-floating-button", standalone: true, imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule], template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["button{position:fixed;top:64px}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vY29tcG9uZW50cy9mbG9hdGluZy1idXR0b24vZmxvYXRpbmctYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBa0MvQyxNQUFNLE9BQU8sdUJBQXVCO0lBOUJwQztRQStCRSxTQUFJLEdBQUcsS0FBSyxDQUFPLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLFVBQUssR0FBRyxLQUFLLEVBQVUsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFFbkIsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0tBQ2xFOzhHQU5ZLHVCQUF1QjtrR0FBdkIsdUJBQXVCLGdmQTFCeEI7Ozs7Ozs7Ozs7Ozs7OztHQWVULDBHQWhCUyxZQUFZLDJGQUFFLFlBQVksK1FBQUUsZUFBZSwyTkFBRSxhQUFhOzsyRkEyQnpELHVCQUF1QjtrQkE5Qm5DLFNBQVM7K0JBQ0UscUJBQXFCLGNBQ25CLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxZQUMzRDs7Ozs7Ozs7Ozs7Ozs7O0dBZVQsbUJBU2dCLHVCQUF1QixDQUFDLE1BQU07OEJBT3JDLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgaW5wdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuZXhwb3J0IHR5cGUgU2lkZSA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkb20tZmxvYXRpbmctYnV0dG9uXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgW2Rpc2FibGVSaXBwbGVdPVwidHJ1ZVwiXG4gICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICBbc3R5bGUucmlnaHQucHhdPVwic2lkZSgpID09PSAnbGVmdCcgPyBudWxsIDogMFwiXG4gICAgICBbc3R5bGUubGVmdC5weF09XCJzaWRlKCkgPT09ICdyaWdodCcgPyBudWxsIDogMFwiXG4gICAgICBbc3R5bGUuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMucHhdPVwic2lkZSgpID09PSAnbGVmdCcgPyAyNSA6IG51bGxcIlxuICAgICAgW3N0eWxlLmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLnB4XT1cInNpZGUoKSA9PT0gJ2xlZnQnID8gMjUgOiBudWxsXCJcbiAgICAgIFtzdHlsZS5ib3JkZXItdG9wLWxlZnQtcmFkaXVzLnB4XT1cInNpZGUoKSA9PT0gJ3JpZ2h0JyA/IDI1IDogbnVsbFwiXG4gICAgICBbc3R5bGUuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy5weF09XCJzaWRlKCkgPT09ICdyaWdodCcgPyAyNSA6IG51bGxcIlxuICAgICAgW3JvdXRlckxpbmtdPVwicm91dGVyTGluaygpXCJcbiAgICAgIChjbGljayk9XCJjbGlja2VkLmVtaXQoKVwiPlxuICAgICAge3sgbGFiZWwoKSB8IHRpdGxlY2FzZSB9fVxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNjRweDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b25Db21wb25lbnQge1xuICBzaWRlID0gaW5wdXQ8U2lkZT4oXCJyaWdodFwiKTtcbiAgbGFiZWwgPSBpbnB1dDxzdHJpbmc+KCk7XG4gIHJvdXRlckxpbmsgPSBpbnB1dDxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==