import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[domActionCell]',
  standalone: true,
})
export class ActionCellDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
