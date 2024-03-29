import { Pipe, PipeTransform } from '@angular/core';
import { Temperature } from '../../weather/models/current-weather-MediaResult';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: Temperature, metric: boolean | null): unknown {
    const key: keyof Temperature = metric ? 'Metric' : 'Imperial';
    return value[key].Value;
  }
}
