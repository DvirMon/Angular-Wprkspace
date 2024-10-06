import { EvaluateConfig } from './filter.types';

export abstract class AbstractEvaluate {
  abstract evaluate<T>(config : EvaluateConfig): (item: T) => boolean;
}
