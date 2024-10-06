import { FilterOperation } from '../filter.types';
import { isInRange, isNumber } from './compare.helpers';
import { FilterStrategy } from './strategies.types';

export class NumberRangeStrategy<T> implements FilterStrategy<T> {
  operation: FilterOperation = FilterOperation.RANGE;

  evaluate(value: unknown, criterionValue: unknown): boolean {
    const [min, max] = criterionValue as number[];

    if (this.isComparable(value, criterionValue)) {
      return this.#isInNumberRange(value, min, max);
    }

    console.warn('Invalid value types provided for date range strategy.');
    return false;
  }

  // Utility method to compare number ranges
  #isInNumberRange<T>(value: T, min: T, max: T): boolean {
    return isInRange(value, min, max)
  }

  isComparable(value: unknown, criterionValue: unknown): boolean {
    const [min, max] = criterionValue as number[];
    return isNumber(value) && isNumber(min) && isNumber(max);
  }
}
