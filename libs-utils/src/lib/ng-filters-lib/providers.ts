import { Provider } from '@angular/core';
import { ContainsStrategy } from './filter-strategies/contains';
import { EqualsStrategy } from './filter-strategies/equals';
import { GreaterThanStrategy } from './filter-strategies/greaterThen';
import { LessThanStrategy } from './filter-strategies/lessThen';
import { FILTER_STRATEGIES } from './filter-strategies/strategies.types';
import { LogicalOperator, LOGICAL_OPERATOR } from './filter.types';
import { EvaluateFilterService } from './evaluate-filter.service';

export function provideStrategies(): Provider[] {
  return [
    { provide: FILTER_STRATEGIES, useClass: EqualsStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: ContainsStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: GreaterThanStrategy, multi: true },
    { provide: FILTER_STRATEGIES, useClass: LessThanStrategy, multi: true },
    // { provide: FILTER_STRATEGIES, useClass: RangeStrategy, multi: true },
  ];
}

export function provideLogicOperator(value: LogicalOperator = 'AND'): Provider {
  return { provide: LOGICAL_OPERATOR, useValue: value };
}

export function provideEvaluateFilterService(
  logicalOperator: LogicalOperator = 'AND'
): Provider[] {
  return [
    { provide: LOGICAL_OPERATOR, useValue: logicalOperator }, // Provide LOGICAL_OPERATOR
    { provide: EvaluateFilterService, useClass: EvaluateFilterService }, // Provide the service
  ];
}
