import { Pipe, PipeTransform } from '@angular/core';
import { DailyTemperature } from '../../weather/models/future-weather-result';

@Pipe({
  name: 'dailyTemperature',
  standalone: true,
})
export class DailyTemperaturePipe implements PipeTransform {
  transform(
    value: DailyTemperature,
    args?: 'min' | 'max' | undefined
  ): unknown {
    if (!args) {
      return `${value.Minimum.Value}${value.Minimum.Unit} - ${value.Maximum.Value}${value.Maximum.Unit}`;
    } else {
      const key: keyof DailyTemperature =
        args === 'min' ? 'Minimum' : 'Maximum';
      return value[key].Value;
    }
  }
}
