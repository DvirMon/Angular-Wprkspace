import { ContainsStrategy } from './contains';
import { EqualsStrategy } from './equals';
import { GreaterThanStrategy } from './greaterThen';
import { LessThanStrategy } from './lessThen';
import { FILTER_STRATEGIES } from './strategies.types';

export function provideStrategies() {
  return [
    { provide: FILTER_STRATEGIES, useClass: EqualsStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: ContainsStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: GreaterThanStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: LessThanStrategy, multi: true },
    // { provide: FILTER_STRATEGIES, useClass: RangeStrategy, multi: true },
  ];
}
