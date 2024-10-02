// Represents a basic filter operation type
export type FilterOperation =
  | 'equals'
  | 'contains'
  | 'greaterThan'
  | 'lessThan'
  | 'range';

// Represents logical operators for combining filters
export type LogicalOperator = 'AND' | 'OR';

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? // Recursively call NestedKeys for nested objects, adding `K.` to the path
      `${K & string}` | `${K & string}.${NestedKeys<T[K]>}`
    : `${K & string}`;
}[keyof T];

// Represents the filter criteria for a single property
export interface FilterCriteria<T> {
  key: string; // Access the data in the object
  operation: FilterOperation;
  value: unknown; // The value to filter by
  preprocess?: (value: unknown) => unknown; // User-defined preprocessing logic;
}

export interface RangeFilterCriteria<T> extends FilterCriteria<T> {
  rangeEnd: unknown; // Optional for 'range' operations
}
