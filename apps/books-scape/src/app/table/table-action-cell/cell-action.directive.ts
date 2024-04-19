import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableActionCell]',
  standalone: true,
})
export class ActionCellDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
