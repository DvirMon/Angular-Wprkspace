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

// Represents the filter criteria for a single property
export interface FilterCriteria {
  key: string; // Access the data in the object
  operation: FilterOperation | string;
  value: unknown; // The value to filter by

  // TODO ysu proxy instead of a function?
  preprocess?: (value: unknown) => unknown; // User-defined preprocessing logic;
}

export interface FiltersConfig {
  logicalOperator?: LogicalOperator;
}

export interface EvaluateConfig {
  criteria: FilterCriteria[];
  logicalOperator?: LogicalOperator;
}
