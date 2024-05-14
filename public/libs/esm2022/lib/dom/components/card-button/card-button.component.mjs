import { ChangeDetectionStrategy, Component, EventEmitter, Output, input, } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCard, MatCardContent } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/button";
export class CardButtonComponent {
    constructor() {
        this.label = input();
        this.boldLabel = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CardButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.2", type: CardButtonComponent, isStandalone: true, selector: "dom-card-button", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, boldLabel: { classPropertyName: "boldLabel", publicName: "boldLabel", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, isInline: true, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: MatCardContent, selector: "mat-card-content" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CardButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-card-button", standalone: true, imports: [RouterModule, MatButtonModule, MatCard, MatCardContent], template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9jb21wb25lbnRzL2NhcmQtYnV0dG9uL2NhcmQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFvQy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFsQ2hDO1FBbUNFLFVBQUssR0FBRyxLQUFLLEVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssRUFBVSxDQUFDO1FBRW5CLFlBQU8sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQUNsRTs4R0FOWSxtQkFBbUI7a0dBQW5CLG1CQUFtQiwyZkE3QnBCOzs7Ozs7Ozs7Ozs7ZUFZRywwTUFkSCxZQUFZLCtRQUFFLGVBQWUsNE5BQUUsT0FBTyxvR0FBRSxjQUFjOzsyRkErQnJELG1CQUFtQjtrQkFsQy9CLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFlBRXZEOzs7Ozs7Ozs7Ozs7ZUFZRyxtQkFlSSx1QkFBdUIsQ0FBQyxNQUFNOzhCQU9yQyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIGlucHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHsgTWF0Q2FyZCwgTWF0Q2FyZENvbnRlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZFwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZG9tLWNhcmQtYnV0dG9uXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Q2FyZCwgTWF0Q2FyZENvbnRlbnRdLFxuICBcbiAgdGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgW2Rpc2FibGVSaXBwbGVdPVwidHJ1ZVwiXG4gICAgICAgICAgY29sb3I9XCJhY2NlbnRcIlxuICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cInJvdXRlckxpbmsoKVwiPlxuICAgICAgICAgIHt7IGxhYmVsKCkgfX0gPGI+e3sgYm9sZExhYmVsKCkgfX08L2I+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPC9tYXQtY2FyZD4gYCxcblxuICBzdHlsZXM6IGBtYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDMycHg7XG4gIFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQnV0dG9uQ29tcG9uZW50IHtcbiAgbGFiZWwgPSBpbnB1dDxzdHJpbmc+KCk7XG4gIGJvbGRMYWJlbCA9IGlucHV0PHN0cmluZz4oKTtcbiAgcm91dGVyTGluayA9IGlucHV0PHN0cmluZz4oKTtcblxuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xufVxuIl19