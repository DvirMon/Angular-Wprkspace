import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
  standalone: true,
})
export class PluckPipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(
    value: T | null | undefined | unknown,
    args: keyof T | Array<keyof T>
  ): unknown {
    // Handle null or undefined values gracefully
    if (value === null || value === undefined) {
      return undefined; // Or return any other value you deem appropriate for non-existent properties
    }

    if (!args) {
      throw new Error('Pluck pipe must get object key(s) as args');
    }

    // Handling the case where args is an array of keys
    if (Array.isArray(args)) {
      if (args.length === 0) {
        throw new Error('Pluck pipe must get object key(s) as args');
      }
      return this.pluckMultiple(value as T, args);
    }

    // Handling the case where args is a single key
    return this.pluckSingle(value as T, args);
  }

  private pluckSingle<T>(obj: T, key: keyof T): unknown {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      return 'key not found'; // Consider returning undefined or null for better chaining compatibility
    }
  }

  private pluckMultiple<T>(obj: T, keys: Array<keyof T>): unknown {
    const MediaResult: Partial<T> = {};
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // Use type assertion to satisfy TypeScript's type checking
        MediaResult[key] = obj[key as keyof typeof obj];
      }
    });
    return MediaResult;
  }
}
