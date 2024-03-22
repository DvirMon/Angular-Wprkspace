import { State } from './store';

export function updateSelectedId(id: number): Partial<State> {
  return { selectedId: id };
}

export function updateIsMetric(isMetric: boolean): Partial<State> {
  return { isMetric };
}
