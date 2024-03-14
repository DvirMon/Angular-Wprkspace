function toCamelCase(str: string): string {
  return str
    .split(' ') // Split the string into words
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Lowercase the first word
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of subsequent words
    )
    .join(''); // Join the words back together
}

export function loadMethod(input: string): string {
  const camelCaseString = toCamelCase(input);
  return `load${camelCaseString}`;
}
