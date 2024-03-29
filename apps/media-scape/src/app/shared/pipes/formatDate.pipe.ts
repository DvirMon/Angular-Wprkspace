import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, format = 'yyyy-MM-dd'): string | null {
    // Ensure that the input value is valid
    if (!value || value.trim().length !== 8 || isNaN(Number(value))) {
      return value; // Return the input value unchanged if it's not in the expected format
    }

    // Extract year, month, and day parts
    const year = parseInt(value.substring(0, 4));
    const month = parseInt(value.substring(4, 6)) - 1; // Months in JavaScript Date are zero-based (0-11)
    const day = parseInt(value.substring(6));

    // Construct a Date object from the extracted parts
    const dateObject = new Date(year, month, day);

    // Check if the constructed date is valid
    if (isNaN(dateObject.getTime())) {
      return value; // Return the input value unchanged if the constructed date is invalid
    }

    // Format the date using the Angular date pipe
    const datePipe = new DatePipe('en-US'); // Adjust locale as needed
    const formattedDate = datePipe.transform(dateObject, format);

    return formattedDate;
  }
}
