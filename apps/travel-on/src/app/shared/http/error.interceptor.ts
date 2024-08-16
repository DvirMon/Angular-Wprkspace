import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {

      console.log('errorInterceptor', err)

      return throwError(() => err);
    })
  );
};

