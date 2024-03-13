import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[domOptionContent]',
  standalone: true,
})
export class OptionContentDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
