import { InjectionToken } from '@angular/core';

// Represents a basic filter operation type

export enum FilterOperation {
  EQUALS = 'equals',
  CONTAINS = 'contains',
  GREATER_THAN = 'greaterThan',
  LESS_THAN = 'lessThan',
  RANGE = 'range',
}

// Represents logical operators for combining filters
export type LogicalOperator = 'AND' | 'OR';

export const LOGICAL_OPERATOR = new InjectionToken<'AND' | 'OR'>(
  'LOGICAL_OPERATOR'
);

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? // Recursively call NestedKeys for nested objects, adding `K.` to the path
      `${K & string}` | `${K & string}.${NestedKeys<T[K]>}`
    : `${K & string}`;
}[keyof T];

// Represents the filter criteria for a single property
export interface FilterCriteria<T> {
  key: string; // Access the data in the object
  operation: string;
  value: unknown; // The value to filter by

  // TODO ysu proxy instead of a function?
  preprocess?: (value: unknown) => unknown; // User-defined preprocessing logic;
}

export interface RangeFilterCriteria<T> extends FilterCriteria<T> {
  rangeEnd: unknown; // Optional for 'range' operations
}

export interface FiltersConfig {
  logicalOperator: LogicalOperator;
}
