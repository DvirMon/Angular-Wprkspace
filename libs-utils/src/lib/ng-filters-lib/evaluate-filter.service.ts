import { inject } from '@angular/core';
import { AbstractEvaluate } from './abstract-evaluate';
import { FilterStrategyService } from './filter-strategy.service';
import {
  EvaluateConfig,
  FilterCriteria,
  LOGICAL_OPERATOR,
} from './filter.types';

export class EvaluateFilterService extends AbstractEvaluate {
  #strategyService = inject(FilterStrategyService);
  #logicalOperator = inject(LOGICAL_OPERATOR);

  // Returns a function that can be used as a predicate for array filtering
  evaluate<T>(config: EvaluateConfig): (item: T) => boolean {
    return (item: T): boolean => this.#matchesAllCriteria(item, config);
  }

  // Evaluate if a single item matches all criteria
  #matchesAllCriteria<T>(item: T, config: EvaluateConfig): boolean {
    const { criteria, logicalOperator } = config;

    const results = criteria.map((criterion) =>
      this.#evaluateCriterionWithStrategy(
        item as Record<string, unknown>,
        criterion
      )
    );

    this.#logicalOperator = logicalOperator || this.#logicalOperator;

    return this.#logicalOperator === 'AND'
      ? results.every(Boolean)
      : results.some(Boolean);
  }

  // Evaluate a single criterion using the strategy pattern
  #evaluateCriterionWithStrategy(
    item: Record<string, unknown>,
    criterion: FilterCriteria
  ): boolean {
    const strategy = this.#strategyService.getStrategy(criterion.operation);

    let value = this.#getNestedValue(item, criterion.key as string);

    if (criterion.preprocess) {
      value = criterion.preprocess(value);
    }

    return strategy ? strategy.evaluate(value, criterion.value) : true;
  }

  #getNestedValue(obj: Record<string, unknown>, path: string): unknown {
    const keys = path.split('.');

    const value = keys.reduce((acc, key) => {
      return acc[key] as Record<string, unknown>;
    }, obj);

    return value;
  }
}
