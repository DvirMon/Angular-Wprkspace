import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Provider } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService implements ErrorHandler {
  handleError(error: ErrorEvent | HttpErrorResponse) {
    
    if (error instanceof HttpErrorResponse) {
      return;
    }

    if (error instanceof ErrorEvent) {
      this.handleClientError(error);
    }
  }

  private handleClientError(error: ErrorEvent): void {
    console.error(
      'Custom Error Handler:',
      error.message || 'An unexpected error occurred'
    );
  }
}

export function provideErrorService(): Provider {
  return {
    provide: ErrorHandler,
    useClass: ErrorsService,
  };
}
