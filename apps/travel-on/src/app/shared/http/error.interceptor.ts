import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {
      return throwError(() => err);
    })
  );
};
