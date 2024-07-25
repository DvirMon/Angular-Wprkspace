import { EventEmitter, Signal } from '@angular/core';
import * as i0 from '@angular/core';
export declare class FlipCardComponent {
  flip = output<void>;
  readonly isFlipped: Signal<boolean>;
  constructor();
  onClick(): void;
  handleKeyUp(event: KeyboardEvent): KeyboardEvent;
  static ɵfac: i0.ɵɵFactoryDeclaration<FlipCardComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    FlipCardComponent,
    'dom-flip-container',
    never,
    {},
    { flip: 'flip' },
    never,
    ['.front', '.back'],
    true,
    never
  >;
}
