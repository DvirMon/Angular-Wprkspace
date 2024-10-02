import { isNumber, isInNumberRange } from './compare.helpers';
import { FilterOperation } from '../filter.types';
import { RangeFilterStrategy } from './strategies.types';

export class NumberRangeStrategy<T> implements RangeFilterStrategy<T> {
  operation: FilterOperation = 'range';

  evaluate(value: unknown, criterionValue: unknown, rangeEnd: number): boolean {
    if (this.isComparable(value, criterionValue, rangeEnd)) {
      return isInNumberRange(
        value as number,
        criterionValue as number,
        rangeEnd as number
      );
    }

    console.warn('Invalid value types provided for number range strategy.');
    return false;
  }

  isComparable(
    value: unknown,
    criterionValue: unknown,
    rangeEnd: unknown
  ): boolean {
    return isNumber(value) && isNumber(criterionValue) && isNumber(rangeEnd);
  }
}
