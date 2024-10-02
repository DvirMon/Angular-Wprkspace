import { computed, inject, Injectable, Signal } from '@angular/core';
import { AbstractFilter } from './abstract-filters';
import { EvaluateFilterService } from './evaluate-filter.service';
import { FilterCriteria } from './filter.types';

@Injectable({ providedIn: 'root' })
export abstract class CentralFilterService extends AbstractFilter {
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

  override setData(newData: Record<string, unknown>[]): void {
    this.data.set(newData);
  }

  override setFilterCriteria(criteria: FilterCriteria[]): void {
    this.filterCriteria.set(criteria);
  }

  // Abstract method to retrieve filtered data
  override getFilteredData(): Signal<Record<string, unknown>[]> {
    return this.#filteredData;
  }

  // Utility method to clear filters
  override clearFilters(): void {
    this.filterCriteria.set([]);
  }

  #applyCriteria(
    data: Record<string, unknown>[],
    criteria: FilterCriteria[]
  ): Record<string, unknown>[] {
    return data.filter(this.#evaluateService.evaluate(criteria));
  }
}
