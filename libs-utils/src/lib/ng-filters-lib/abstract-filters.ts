import { signal, Signal, WritableSignal } from '@angular/core';
import { EvaluateConfig } from './filter.types';

interface FilterManager<T> {
  setData(newData: T[]): void;
  setFilterConfig(config: EvaluateConfig): void;
  getFilteredData(): Signal<T[]>;
  clearFilters(): void;
}

export abstract class AbstractFilter<T> implements FilterManager<T> {
  protected data: WritableSignal<T[]> = signal([]);
  // protected filterCriteria = signal<FilterCriteria[]>([]);
  protected filterConfig = signal<EvaluateConfig | null>(null)
  protected abstract filteredData: Signal<T[]>;

  // Make setData abstract, to be implemented by concrete classes
  abstract setData(newData: T[]): void;

  // Abstract method to retrieve filtered data
  abstract getFilteredData(): Signal<T[]>;

  // Utility method to clear filters
  abstract clearFilters(): void;

  // Method to set the filter configuration
  abstract setFilterConfig(config: EvaluateConfig): void;
}
