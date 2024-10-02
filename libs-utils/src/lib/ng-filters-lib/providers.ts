import { Provider } from '@angular/core';
import { EvaluateFilterService } from './evaluate-filter.service';
import { ContainsStrategy } from './filter-strategies/contains';
import { EqualsStrategy } from './filter-strategies/equals';
import {
  FiltersConfig,
  LOGICAL_OPERATOR,
  LogicalOperator,
} from './filter.types';
import { AbstractEvaluate } from './abstract-evaluate';

function provideFilterStrategies(): Provider[] {
  return [EqualsStrategy, ContainsStrategy];
}

function provideLogicOperator(value: LogicalOperator = 'AND'): Provider {
  return { provide: LOGICAL_OPERATOR, useValue: value };
}

function provideEvaluateFilterService(
  logicalOperator: LogicalOperator = 'AND'
): Provider[] {
  return [
    { provide: LOGICAL_OPERATOR, useValue: logicalOperator }, // Provide LOGICAL_OPERATOR
    { provide: EvaluateFilterService, useClass: EvaluateFilterService }, // Provide the service
  ];
}

export function provideFilters(config?: FiltersConfig): Provider[] {
  return [
    { provide: AbstractEvaluate, useClass: EvaluateFilterService },
    provideFilterStrategies(),
    provideLogicOperator(config?.logicalOperator),
  ];
}
