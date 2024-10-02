import { inject, Injectable, InjectionToken } from '@angular/core';
import { FilterStrategyService } from './filter-strategy.service';
import { FilterCriteria } from './filter.types';

export const LOGICAL_OPERATOR = new InjectionToken<'AND' | 'OR'>(
  'LOGICAL_OPERATOR',
  {
    providedIn: 'root',
    factory: () => 'AND', // Default value
  }
);

@Injectable({
  providedIn: 'root', // Register as a singleton service
})
export class EvaluateFilterService<T> {
  #strategyService = inject(FilterStrategyService);
  #logicalOperator = inject(LOGICAL_OPERATOR);

  // Returns a function that can be used as a predicate for array filtering
  evaluate(criteria: FilterCriteria<T>[]): (item: T) => boolean {
    return (item: T): boolean => this.#matchesAllCriteria(item, criteria);
  }

  // Evaluate if a single item matches all criteria
  #matchesAllCriteria(item: T, criteria: FilterCriteria<T>[]): boolean {
    // const { criteria, logicalOperator } = config;
    const results = criteria.map((criterion) =>
      this.#evaluateCriterionWithStrategy(
        item as Record<string, any>,
        criterion
      )
    );

    return this.#logicalOperator === 'AND'
      ? results.every(Boolean)
      : results.some(Boolean);
  }

  // Evaluate a single criterion using the strategy pattern
  #evaluateCriterionWithStrategy(
    item: Record<string, any>,
    criterion: FilterCriteria<T>
  ): boolean {
    const strategy = this.#strategyService.getStrategy(criterion.operation);
    const value = this.#getNestedValue(item, criterion.key as string);

    return strategy ? strategy.evaluate(value, criterion.value) : false;
  }

  #getNestedValue<T>(obj: Record<string, any>, path: string): unknown {
    const keys = path.split('.');

    const value = keys.reduce((acc, key) => {
      return acc[key];
    }, obj);

    return value;
  }
}
