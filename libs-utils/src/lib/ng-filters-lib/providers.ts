import { Provider } from '@angular/core';
import { AbstractEvaluate } from './abstract-evaluate';
import { AbstractFilter } from './abstract-filters';
import { CentralFilterService } from './central-filters.service';
import { EvaluateFilterService } from './evaluate-filter.service';
import { ContainsStrategy } from './filter-strategies/contains';
import { EqualsStrategy } from './filter-strategies/equals';
import {
  FiltersConfig,
  LOGICAL_OPERATOR,
  LogicalOperator,
} from './filter.types';

function provideFilterStrategies(): Provider[] {
  return [EqualsStrategy, ContainsStrategy];
}

function provideLogicOperator(value: LogicalOperator = 'AND'): Provider {
  return { provide: LOGICAL_OPERATOR, useValue: value };
}
function provideEvaluate(): Provider {
  return { provide: AbstractEvaluate, useClass: EvaluateFilterService };
}

function provideCentralFilter(): Provider {
  return { provide: AbstractFilter, useClass: CentralFilterService };
}

export function provideFilters(config?: FiltersConfig): Provider[] {
  return [
    provideCentralFilter(),
    provideEvaluate(),
    provideFilterStrategies(),
    provideLogicOperator(config?.logicalOperator),
  ];
}
