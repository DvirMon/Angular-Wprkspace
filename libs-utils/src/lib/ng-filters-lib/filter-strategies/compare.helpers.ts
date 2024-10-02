// Utility method to validate if a value is a number
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// Utility method to validate if a value is a Date
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

// Utility method to compare number ranges
export function isInNumberRange(
  value: number,
  start: number,
  end: number
): boolean {
  return value >= start && value <= end;
}

// Utility method to compare date ranges
export function isInDateRange(value: Date, start: Date, end: Date): boolean {
  return value >= start && value <= end;
}

// Utility method to validate if a value is a string
export function isValidString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isValid(value: unknown): boolean {
  return value !== null && value !== undefined;
}
