import { FilterOperation } from '../filter.types';
import { isDate, isInRange } from './compare.helpers';
import { FilterStrategy } from './strategies.types';


export class DateRangeStrategy<T> implements FilterStrategy<T> {
  operation: FilterOperation = FilterOperation.RANGE;

  evaluate(value: unknown, criterionValue: unknown): boolean {
    const [start, end] = criterionValue as Date[];

    if (this.isComparable(value, criterionValue)) {
      return this.#isInDateRange(value as Date, start as Date, end as Date);
    }

    console.warn('Invalid value types provided for date range strategy.');
    return false;
  }

  // Utility method to compare date ranges
  #isInDateRange(value: Date, start: Date, end: Date): boolean {
    return isInRange(value, start, end);
  }

  isComparable(value: unknown, criterionValue: unknown): boolean {
    const [start, end] = criterionValue as Date[];
    return isDate(value) && isDate(start) && isDate(end);
  }
}
