import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'highLight',
    pure: true,
    standalone: true
})
export class HighLightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string, tag = 'strong'): SafeHtml {
    // Check if the search term is provided
    if (!searchTerm) {
      return value;
    }

    // Create a RegExp to match the search term in a case-insensitive manner
    const regex = new RegExp(searchTerm, 'i');
    const match = value.match(regex);

    // If there's no match, return the original value
    if (!match) {
      return value;
    }

    // Replace the matched term with the term wrapped in the specified tag
    const replacedValue = value.replace(regex, `<${tag}>${match[0]}</${tag}>`);

    // Use DomSanitizer to bypass Angular's security and mark the replaced value as safe HTML
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }
}

