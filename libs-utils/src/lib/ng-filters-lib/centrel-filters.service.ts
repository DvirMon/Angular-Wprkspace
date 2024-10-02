import { computed, inject, Injectable, Signal } from '@angular/core';
import { AbstractFilter } from './abstract-filters';
import { EvaluateFilterService } from './evaluate-filter.service';
import { FilterCriteria } from './filter.types';

@Injectable({ providedIn: 'root' })
export abstract class CentralFilterService<T> extends AbstractFilter<T> {

  #evaluateService = inject(EvaluateFilterService);

  // Use computed to derive filteredData from data and filterConfig
  #filteredData = computed(() => {
    const criteria = this.filterCriteria();
    const currentData = this.data();

    if (!(criteria.length == 0)) {
      return currentData; // Return all data if no filter config is set
    }

    return this.#applyCriteria(currentData, criteria);
  });

  override setData(newData: T[]): void {
    this.data.set(newData);
  }

  override setFilterCriteria(criteria: FilterCriteria<T>[]): void {
    this.filterCriteria.set(criteria);
  }

  // Abstract method to retrieve filtered data
  override getFilteredData(): Signal<T[]> {
    return this.#filteredData;
  }

  // Utility method to clear filters
  override clearFilters(): void {
    this.filterCriteria.set([]);
  }

  #applyCriteria(data: T[], criteria: FilterCriteria<T>[]): T[] {
    return data.filter(this.#evaluateService.evaluate(criteria));
  }
}
