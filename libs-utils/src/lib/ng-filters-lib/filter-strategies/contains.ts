import { isValidString } from './compare.helpers';
import { FilterOperation } from '../filter.types';
import { FilterStrategy } from './strategies.types';

export class ContainsStrategy<T> implements FilterStrategy<T> {
  operation: FilterOperation = FilterOperation.CONTAINS;


  constructor() {

    console.log('ContainsStrategy created')
  }


  evaluate(value: unknown, criterionValue: unknown): boolean {
    if (this.isComparable(value, criterionValue)) {
      console.warn('Invalid value types provided for contains strategy.');
      return false;
    }

    // Normalize both values to lowercase to perform case-insensitive comparison
    value = (value as string).toLowerCase();
    criterionValue = (criterionValue as string).toLowerCase();

    // Check if the normalized value includes the normalized criterion value
    return (value as string).includes(criterionValue as string);

  }

  // Method to validate if values are comparable
  isComparable(value: unknown, criterionValue: unknown): boolean {
    return !isValidString(value) || !isValidString(criterionValue);
  }
}
