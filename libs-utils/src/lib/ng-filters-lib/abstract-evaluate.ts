import { FilterCriteria } from './filter.types';

export abstract class AbstractEvaluate<T> {
  abstract evaluate(criteria: FilterCriteria<T>[]): (item: T) => boolean;
}
