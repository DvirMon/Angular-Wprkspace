# ng-filters-lib

This library was generated with [Nx](https://nx.dev).

## Description

`ng-filters-lib` is an Angular library for managing and applying filtering logic with flexibility and ease. It provides both declarative and stateful approaches for filtering data, supporting various criteria combinations and filtering strategies.

This library was generated with [Nx](https://nx.dev).

## Installation

You can install `ng-filters-lib` via npm:

```bash
npm install ng-filters-lib
```

## Setup

Before using the library, make sure to include the filter providers in your `ApplicationConfig`.

### Basic Setup

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideFilters } from 'ng-filters-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFilters(), // Add this line to provide the filter services
  ],
};
```

### Setup with Configuration Object

If you need to customize the logical operator (default is 'AND'), you can pass a `FiltersConfig` object to `provideFilters()`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideFilters, FiltersConfig } from 'ng-filters-lib';

const filtersConfig: FiltersConfig = {
  logicalOperator: 'OR', // Set the logical operator to 'OR'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFilters(filtersConfig), // Pass the config object
  ],
};
```

## Usage

### 1. Declarative Filtering

`ng-filters-lib` provides stateless functions that can be used declaratively to filter arrays of data.

#### Example

```typescript
import { AbstractEvaluate, FilterOperation } from 'ng-filters-lib';
import { inject } from '@angular/core';

// Example: MediaResult interface
interface MediaResult {
  title: string;
  releaseDate: string;
}

// Define filter criteria
const filterConfig = {
  criteria: [
    { key: 'title', operation: FilterOperation.Contains, value: 'Star Wars' },
    {
      key: 'releaseDate',
      operation: FilterOperation.GreaterThan,
      value: '2000-01-01',
    },
  ],
};

// Inject the AbstractEvaluate
const evaluateService = inject(AbstractEvaluate);
const filterFunction = evaluateService.evaluate(filterConfig);

// Sample data
const mediaResults: MediaResult[] = [
  { title: 'Star Wars', releaseDate: '1977-05-25' },
  { title: 'Star Wars: The Force Awakens', releaseDate: '2015-12-18' },
];

// Apply the filter
const filteredResults = mediaResults.filter(filterFunction);

console.log(filteredResults);
// Output: [{ title: 'Star Wars: The Force Awakens', releaseDate: '2015-12-18' }]
```

### 2. Stateful Filtering with Angular Services

For more complex cases, `ng-filters-lib` offers a stateful approach, where filtering logic is handled through Angular services, allowing you to dynamically update and manage filtering state.

#### Example

```typescript
import { AbstractFilter, FilterOperation } from 'ng-filters-lib';
import { inject } from '@angular/core';

// Inject the AbstractFilter service
const filterService = inject(AbstractFilter);

// Set data
filterService.setData([
  { title: 'Star Wars', releaseDate: '1977-05-25' },
  { title: 'Star Wars: The Force Awakens', releaseDate: '2015-12-18' },
]);

// Set filter configuration
filterService.setFilterConfig({
  criteria: [
    { key: 'title', operation: FilterOperation.Contains, value: 'Star Wars' },
    {
      key: 'releaseDate',
      operation: FilterOperation.GreaterThan,
      value: '2000-01-01',
    },
  ],
});

// Get filtered data
const filteredData = filterService.getFilteredData();
```

### Extending the Library

`ng-filters-lib` is designed with flexibility in mind, allowing users to extend or modify its behavior by implementing their own concrete classes. If the default logic doesn't fit your specific use case, you can easily create your own implementations.

#### 1. AbstractFilter

The `AbstractFilter` class provides the foundational structure for filtering logic. You can implement your own filtering logic by extending this abstract class and overriding the necessary methods (like `applyFilter` or `evaluateCriterion`).

**Example**:

```typescript
import { AbstractFilter, FilterCriteria } from 'ng-filters-lib';
import { inject, Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomFilter extends AbstractFilter {
  data: Signal<T[]> = signal([]);
  override filteredData: Signal<T[]> = signal([]);

  override setData(newData: T[]): void {}

  override setFilterCriteria(criteria: FilterCriteria[]): void {}

  // Abstract method to retrieve filtered data
  override getFilteredData(): Signal<T[]> {}

  // Utility method to clear filters
  override clearFilters(): void {}
}
```

#### 2. AbstractEvaluate

The `AbstractEvaluate` class gives you control over how criteria are evaluated. By providing your own implementation, you can modify how filters are applied or introduce new evaluation mechanisms.

**Example**:

```typescript
import { AbstractEvaluate, FilterCriteria } from 'ng-filters-lib';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomEvaluate<T> extends AbstractEvaluate<T> {

  // Implement your own evaluation logic
  evaluate<T>(criteria: FilterCriteria[]): (item: T) => boolean {
    // Custom evaluation for your criteria
    return /* custom logic */;
  }
}
```

#### 3. FILTER_STRATEGIES Injection Token

The `FILTER_STRATEGIES` token allows you to provide custom strategies for evaluating filter operations. You can register your own filtering strategies through Angular's Dependency Injection (DI) mechanism.

**Example**:

```typescript
import { InjectionToken, Injectable } from '@angular/core';
import { FilterStrategy } from 'ng-filters-lib';

@Injectable({ providedIn: 'root' })
export class CustomContainsStrategy<T> implements FilterStrategy<T> {
  operation = 'containsCustom';

  evaluate(value: any, criterionValue: any): boolean {
    // Custom logic here
    return value.toString().includes(criterionValue);
  }

  // Method to validate if values are comparable
  isComparable(value: unknown, criterionValue: unknown): boolean {
    // Custom logic here
  }
}

// Register the strategy using Angular standalone syntax
import { ApplicationConfig } from '@angular/core';
import { provideFilters, FILTER_STRATEGIES } from 'ng-filters-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFilters(),
    {
      provide: FILTER_STRATEGIES,
      useClass: CustomContainsStrategy,
      multi: true,
    },
  ],
};
```

### API

#### `AbstractEvaluate`

- **`evaluate<T>(criteria: FilterCriteria[]): (item: T) => boolean`**  
  Returns a function that can be used to filter an array declaratively.

#### `AbstractFilter<T>`

- **`setData(newData: T[]): void`**  
  Sets the data to be filtered.

- **`setFilterCriteria(criteria: FilterCriteria[]): void`**  
  Sets the filter criteria array.

- **`getFilteredData(): Signal<T[]>`**  
  Returns the filtered data as an Angular Signal.

- **`clearFilters(): void`**  
  Clears all filters and resets the data.

## Running Unit Tests

Run `nx test ng-filters-lib` to execute the unit tests.

## Contributing

Feel free to submit issues or pull requests to contribute to the project.
