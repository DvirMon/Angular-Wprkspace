import { computed, inject, Injectable, Signal } from '@angular/core';
import { AbstractFilter } from './abstract-filters';
import { EvaluateFilterService } from './evaluate-filter.service';
import { EvaluateConfig } from './filter.types';

@Injectable({ providedIn: 'root' })
export class CentralFilterService<T> extends AbstractFilter<T> {
  #evaluateService = inject(EvaluateFilterService);

  // Use computed to derive filteredData from data and filterConfig
  override filteredData = computed(() => {
    const config = this.filterConfig();
    const currentData = this.data();

    if (!(config?.criteria.length == 0)) {
      return currentData; // Return all data if no filter config is set
    }

    return this.#applyCriteria(currentData, config);
  });

  override setData(newData: T[]): void {
    this.data.set(newData);
  }

  override setFilterConfig(config: EvaluateConfig): void {
    this.filterConfig.set(config);
  }

  // Abstract method to retrieve filtered data
  override getFilteredData(): Signal<T[]> {
    return this.filteredData;
  }

  // Utility method to clear filters
  override clearFilters(): void {
    this.filterConfig.set(null);
  }

  #applyCriteria(data: T[], config: EvaluateConfig): T[] {
    return data.filter(this.#evaluateService.evaluate(config));
  }
}
