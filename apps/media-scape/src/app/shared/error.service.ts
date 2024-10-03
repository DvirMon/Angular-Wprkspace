import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {


    if (error instanceof HttpErrorResponse) {
      return
    }

    this.handleClientError(error);
  }

  private handleClientError(error: Error): void {

    console.error(
      'Error Handler:',
      error.message || 'An unexpected error occurred'
    );
  }
}
