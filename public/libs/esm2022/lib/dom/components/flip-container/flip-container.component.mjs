import { animate, state, style, transition, trigger, } from "@angular/animations";
import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject, } from "@angular/core";
import { FlipContainerService } from "./flip-container.service";
import * as i0 from "@angular/core";
export class FlipCardComponent {
    constructor() {
        this.flip = new EventEmitter();
        this.isFlipped = inject(FlipContainerService).getFlipState();
    }
    onClick() {
        this.flip.emit();
    }
    handleKeyUp(event) {
        return event;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: FlipCardComponent, isStandalone: true, selector: "dom-flip-container", outputs: { flip: "flip" }, ngImport: i0, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"], animations: [
            trigger("flip", [
                state("front", style({
                    transform: "rotateY(0deg)",
                })),
                state("back", style({
                    transform: "rotateY(180deg)",
                })),
                transition("front <=> back", [animate("0.5s")]),
            ]),
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-flip-container", standalone: true, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, animations: [
                        trigger("flip", [
                            state("front", style({
                                transform: "rotateY(0deg)",
                            })),
                            state("back", style({
                                transform: "rotateY(180deg)",
                            })),
                            transition("front <=> back", [animate("0.5s")]),
                        ]),
                    ], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { flip: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9jb21wb25lbnRzL2ZsaXAtY29udGFpbmVyL2ZsaXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQXlDaEUsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QjtRQUhVLFNBQUksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl0RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQW9CO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs4R0FkVSxpQkFBaUI7a0dBQWpCLGlCQUFpQix5R0FwQ2xCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCwrVUFFVztZQUNWLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsS0FBSyxDQUNILE9BQU8sRUFDUCxLQUFLLENBQUM7b0JBQ0osU0FBUyxFQUFFLGVBQWU7aUJBQzNCLENBQUMsQ0FDSDtnQkFDRCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDSixTQUFTLEVBQUUsaUJBQWlCO2lCQUM3QixDQUFDLENBQ0g7Z0JBQ0QsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDaEQsQ0FBQztTQUNIOzsyRkFHVSxpQkFBaUI7a0JBdkM3QixTQUFTOytCQUNFLG9CQUFvQixjQUNsQixJQUFJLFlBQ047Ozs7Ozs7Ozs7Ozs7OztHQWVULGNBRVc7d0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxLQUFLLENBQ0gsT0FBTyxFQUNQLEtBQUssQ0FBQztnQ0FDSixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUNIOzRCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxpQkFBaUI7NkJBQzdCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDaEQsQ0FBQztxQkFDSCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTt3REFHckMsSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxufSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFNpZ25hbCxcbiAgaW5qZWN0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmxpcENvbnRhaW5lclNlcnZpY2UgfSBmcm9tIFwiLi9mbGlwLWNvbnRhaW5lci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkb20tZmxpcC1jb250YWluZXJcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBbQGZsaXBdPVwiaXNGbGlwcGVkKCkgPyAnYmFjaycgOiAnZnJvbnQnXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgICAgKGtleXVwKT1cImhhbmRsZUtleVVwKCRldmVudClcIlxuICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mcm9udFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5mcm9udFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJhY2tcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCIuYmFja1wiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCIuL2ZsaXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzXCJdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcihcImZsaXBcIiwgW1xuICAgICAgc3RhdGUoXG4gICAgICAgIFwiZnJvbnRcIixcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVZKDBkZWcpXCIsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgIFwiYmFja1wiLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVkoMTgwZGVnKVwiLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oXCJmcm9udCA8PT4gYmFja1wiLCBbYW5pbWF0ZShcIjAuNXNcIildKSxcbiAgICBdKSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZsaXBDYXJkQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGZsaXA6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgaXNGbGlwcGVkOiBTaWduYWw8Ym9vbGVhbj47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNGbGlwcGVkID0gaW5qZWN0KEZsaXBDb250YWluZXJTZXJ2aWNlKS5nZXRGbGlwU3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgIHRoaXMuZmxpcC5lbWl0KCk7XG4gIH1cblxuICBoYW5kbGVLZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IEtleWJvYXJkRXZlbnQge1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufVxuIl19