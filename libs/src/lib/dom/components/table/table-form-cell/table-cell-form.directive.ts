import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[domTableFormCell]',
  standalone: true,
})
export class FormCellDirective {
  constructor(public vcr: ViewContainerRef) {}
}
