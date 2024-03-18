import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ParallaxDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    onScroll(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParallaxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ParallaxDirective, "[domParallax]", never, {}, {}, never, never, true, never>;
}
