import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService implements ErrorHandler {
  constructor(
    private router: Router,
    @Inject(Injector) private injector: Injector
  ) {}

  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  handleErrorMessage(error: ErrorEvent | HttpErrorResponse) {
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
