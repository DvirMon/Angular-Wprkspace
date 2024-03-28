import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { EMPTY, catchError, throwError } from 'rxjs';
import { ERROR_MESSAGE_CONTEXT } from './error-message.context';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const message = req.context.get(ERROR_MESSAGE_CONTEXT);

      if (err.status === 404) {
        console.log(message)
      }

      return throwError(() => EMPTY);
    })
  );
};
