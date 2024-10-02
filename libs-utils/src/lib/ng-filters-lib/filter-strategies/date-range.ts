import { FilterOperation } from '../filter.types';
import { isDate } from './compare.helpers';
import { RangeFilterStrategy } from './strategies.types';

export class DateRangeStrategy<T> implements RangeFilterStrategy<T> {
  operation: FilterOperation = FilterOperation.RANGE;

  evaluate(
    value: unknown,
    criterionValue: unknown,
    rangeEnd: unknown
  ): boolean {
    if (this.isComparable(value, criterionValue, rangeEnd)) {
      return this.#isInDateRange(
        value as Date,
        criterionValue as Date,
        rangeEnd as Date
      );
    }

    console.warn('Invalid value types provided for date range strategy.');
    return false;
  }

  // Utility method to compare date ranges
  #isInDateRange(value: Date, start: Date, end: Date): boolean {
    return value >= start && value <= end;
  }

  isComparable(
    value: unknown,
    criterionValue: unknown,
    rangeEnd: unknown
  ): boolean {
    return isDate(value) && isDate(criterionValue) && isDate(rangeEnd);
  }
}
