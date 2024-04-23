import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[domTableActionCell]',
  standalone: true,
})
export class ActionCellDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
