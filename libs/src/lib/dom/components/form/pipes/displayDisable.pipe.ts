import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayOptionDisable',
  standalone: true,
})
export class DisplayOptionDisablePipe<T> implements PipeTransform {
  transform(value: T, displayWith: (option: T) => boolean): boolean {
    return displayWith(value);
  }
}
