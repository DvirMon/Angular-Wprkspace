import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableActionCell]',
  standalone: true,
})
export class KKLActionCellDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
