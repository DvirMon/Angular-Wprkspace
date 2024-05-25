import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayOptionLabel',
  standalone: true,
})
export class DisplayOptionLabelPipe<T> implements PipeTransform {
  transform(value: T, displayWith: (option: T) => string): string {
    return displayWith(value);
  }
}



