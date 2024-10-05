import { FilterCriteria } from './filter.types';

export abstract class AbstractEvaluate {
  abstract evaluate<T>(criteria: FilterCriteria[]): (item: T) => boolean;
}
