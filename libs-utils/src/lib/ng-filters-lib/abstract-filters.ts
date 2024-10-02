import { signal, Signal, WritableSignal } from '@angular/core';
import { FilterCriteria } from './filter.types';

interface FilterManager {
  setData(newData: Record<string, unknown>[]): void;
  setFilterCriteria(config: FilterCriteria[]): void;
  getFilteredData(): Signal<Record<string, unknown>[]>;
  clearFilters(): void;
}

export abstract class AbstractFilter implements FilterManager {
  protected data: WritableSignal<Record<string, unknown>[]> = signal([]);
  protected filterCriteria = signal<FilterCriteria[]>([]);
  protected abstract filteredData: Signal<Record<string, unknown>[]>;

  // Make setData abstract, to be implemented by concrete classes
  abstract setData(newData: Record<string, unknown>[]): void;

  // Abstract method to retrieve filtered data
  abstract getFilteredData(): Signal<Record<string, unknown>[]>;

  // Utility method to clear filters
  abstract clearFilters(): void;

  // Method to set the filter configuration
  abstract setFilterCriteria(config: FilterCriteria[]): void;
}
