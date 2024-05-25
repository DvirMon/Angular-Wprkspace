export function mapToString<T>(
  array: T[],
  extractFunction: (item: T) => string,
  maxLength: number
): string {
  const result = array.map(extractFunction).join(', ');

  console.log(result)
  if (result.length > maxLength) {
    return result.substring(0, maxLength) + '...';
  }
  return result;
}
