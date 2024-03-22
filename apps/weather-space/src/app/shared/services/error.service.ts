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

  handleError(error: ErrorEvent | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // this.handleHttpError(error);
    } else if (error instanceof ErrorEvent) {
      this.handleClientError(error);
    } else {
      // Handle other types of errors as needed
    }
  }

  private handleClientError(error: ErrorEvent): void {
    console.error(
      'Custom Error Handler:',
      error.message || 'An unexpected error occurred'
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    console.log(error);
    console.log('in server');

    // const errorMsg = this.setMessage(error);
    // sessionStorage.setItem('errorMessage', errorMsg);
    // Uncomment the following lines if you want to display toastr and navigate to error page
    // this.toastrService.error(error.message, errorMsg);
    // this.router.navigate(['error']);
  }

  // private setMessage(error: HttpErrorResponse): string {
  //   let message = '';
  //   if (error.status) {
  //     message = `Error Code: ${error.status},  Message: ${
  //       error.message || error.error.message
  //     }`;
  //   } else {
  //     message = 'An unexpected error ocurred';
  //   }

  //   return message;
  // }
}
