import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayLabel',
  standalone: true,
})
export class DisplayLabelPipe<T> implements PipeTransform {
  transform(value: T, displayWith: (option: T) => string): string {
    return displayWith(value);
  }
}
