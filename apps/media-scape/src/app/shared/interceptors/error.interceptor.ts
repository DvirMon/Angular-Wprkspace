import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, catchError, throwError } from 'rxjs';

import { Router } from '@angular/router';
export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  const router = inject(Router);

  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {

      if (err.status === 404) {
        router.navigateByUrl('error');
      }

      return throwError(() => EMPTY);
    })
  );
};
