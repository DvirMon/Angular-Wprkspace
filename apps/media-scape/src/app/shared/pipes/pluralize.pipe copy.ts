import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true,
})
export class PluralizePipe implements PipeTransform {
  transform(word: string, value: number): string {
    // Define special cases where pluralization varies
    const irregularPlurals: { [key: string]: string } = {
      movie: 'movies',
      game: 'games',
      series: 'series',
      // Add more irregular plurals as needed
    };

    // Check if the word has an irregular plural form
    if (irregularPlurals[word]) {
      return value === 1 ? word : irregularPlurals[word];
    }

    // If the word doesn't have an irregular plural form, use default pluralization rules
    return value === 1 ? word : word + 's';
  }
}
