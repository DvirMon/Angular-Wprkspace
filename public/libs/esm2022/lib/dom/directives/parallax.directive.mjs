import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export class ParallaxDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onScroll(event) {
        const scrollPosition = event.target.scrollTop;
        this.renderer.setStyle(this.el.nativeElement, 'backgroundPositionY', `${scrollPosition * 0.5}px`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ParallaxDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: ParallaxDirective, isStandalone: true, selector: "[domParallax]", host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ParallaxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domParallax]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { onScroll: [{
                type: HostListener,
                args: ["scroll", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9kaXJlY3RpdmVzL3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0vRSxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFJLENBQUM7SUFHcEUsUUFBUSxDQUFDLEtBQVk7UUFDbkIsTUFBTSxjQUFjLEdBQUksS0FBSyxDQUFDLE1BQXNCLENBQUMsU0FBUyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIscUJBQXFCLEVBQ3JCLEdBQUcsY0FBYyxHQUFHLEdBQUcsSUFBSSxDQUM1QixDQUFDO0lBQ0osQ0FBQzs4R0FaVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3VHQU1DLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkb21QYXJhbGxheF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBASG9zdExpc3RlbmVyKFwic2Nyb2xsXCIsIFtcIiRldmVudFwiXSlcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zY3JvbGxUb3A7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdiYWNrZ3JvdW5kUG9zaXRpb25ZJyxcbiAgICAgIGAke3Njcm9sbFBvc2l0aW9uICogMC41fXB4YFxuICAgICk7XG4gIH1cbn0iXX0=