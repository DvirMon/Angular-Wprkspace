import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, catchError, throwError } from 'rxjs';
import { ERROR_MESSAGE_CONTEXT } from './error-message.context';

import { Router } from '@angular/router';
export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  const router = inject(Router);

  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const message = req.context.get(ERROR_MESSAGE_CONTEXT);

      console.log(err.status);

      if (err.status === 404) {
        router.navigateByUrl('error');
      }

      return throwError(() => EMPTY);
    })
  );
};
