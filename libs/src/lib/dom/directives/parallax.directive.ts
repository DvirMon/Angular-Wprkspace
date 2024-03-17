import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[domParallax]',
  standalone: true,
})
export class ParallaxDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("scroll", ["$event"])
  onScroll(event: Event) {
    const scrollPosition = (event.target as HTMLElement).scrollTop;
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundPositionY',
      `${scrollPosition * 0.5}px`
    );
  }
}