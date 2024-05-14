import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[domTableFormCell]',
  standalone: true,
})
export class FormCellDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
