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
  evaluate<T>(config: EvaluateConfig): (item: T) => boolean {
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

## Built-in Filter Strategies

ng-filters-lib provides several built-in filter strategies that cover common use cases. These strategies define how specific operations should be applied to the data.

### Supported Filter Operations

- **equals**: Checks if a value equals the filter value.
- **contains**: Checks if a value contains the filter value (for strings).
- **greaterThan**: Checks if a value is greater than the filter value (for numbers and dates).
- **lessThan**: Checks if a value is less than the filter value (for numbers and dates).

**Note:** All string comparisons are case-sensitive by default. If you require case-insensitive comparisons, consider using the `preprocess` option to modify the input values.

## API

### `EvaluateConfig` interface

The `EvaluateConfig` is the configuration object that defines how the evaluation of filter criteria is handled.

- **`criteria: FilterCriteria[]`**  
  An array of filter criteria that will be used to evaluate and filter the data.
  
- **`logicalOperator: 'AND' | 'OR'`** (Optional)  
  Specifies how multiple filter criteria should be combined. The default value is `'AND'`.  
  - `'AND'`: All criteria must be satisfied.
  - `'OR'`: Only one criterion must be satisfied.

#### Example:

```typescript
const evaluateConfig: EvaluateConfig = {
  criteria: [
    { key: 'title', operation: 'contains', value: 'Star Wars' },
    { key: 'releaseDate', operation: 'greaterThan', value: '2000-01-01' },
  ],
  logicalOperator: 'AND'
};
```

### `FilterCriteria` interface

The `FilterCriteria` interface defines the structure for each filtering rule applied to the data.

- **`key: string`**  
  The key that identifies the field in the data object to be filtered.

- **`operation: FilterOperation | string`**  
  The operation used to filter the data (e.g., `'equals'`, `'contains'`, `'greaterThan'`).

- **`value: unknown`**  
  The value that will be used in the filtering operation.

- **`preprocess?: (value: unknown) => unknown`** (Optional)  
  A user-defined function that pre-processes the value before applying the filter.

#### Example:

```typescript
const filterCriteria: FilterCriteria[] = [
  {
    key: 'title',
    operation: FilterOperation.CONTAINS,
    value: 'Star Wars',
    preprocess: (value: unknown) => (typeof value === 'string' ? value.toLowerCase() : value),
  },
  {
    key: 'releaseDate',
    operation: FilterOperation.GREATER_THAN,
    value: '2000-01-01',
  },
];
```

## `FilterOperation` Enum

The `FilterOperation` enum defines the supported operations for filtering in ng-filters-lib. These operations are used in the `FilterCriteria` to specify how data should be filtered.

### Enum Values:

- **`EQUALS = 'equals'`**  
  Checks if a value equals the filter value.

- **`CONTAINS = 'contains'`**  
  Checks if a string contains the filter value.

- **`GREATER_THAN = 'greaterThan'`**  
  Checks if a value is greater than the filter value. Typically used for numbers or dates.

- **`LESS_THAN = 'lessThan'`**  
  Checks if a value is less than the filter value. Typically used for numbers or dates.

- **`RANGE = 'range'`** 
  This operation is not supported by the built-in filter strategies. If you want to use range-based filtering, you will need to provide your own custom filtering strategy. 
  
## `AbstractEvaluate` class

- **`evaluate<T>(config: EvaluateConfig): (item: T) => boolean`**  
  Returns a function that can be used to filter an array declaratively based on the provided configuration.

### `AbstractFilter<T>` class

- **`setData(newData: T[]): void`**  
  Sets the data to be filtered.

- **`setFilterCriteria(criteria: FilterCriteria[]): void`**  
  Sets the array of filter criteria to be applied.

- **`getFilteredData(): Signal<T[]>`**  
  Returns the filtered data as an Angular Signal, allowing reactive handling of filtered results.

- **`clearFilters(): void`**  
  Clears all filters and resets the data to its original state.


## Running Unit Tests

Run `nx test ng-filters-lib` to execute the unit tests.

## Contributing

Feel free to submit issues or pull requests to contribute to the project.
