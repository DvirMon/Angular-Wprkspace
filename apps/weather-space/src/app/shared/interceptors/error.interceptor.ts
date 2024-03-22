import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ERROR_MESSAGE_CONTEXT } from './error-message.context';
import { inject } from '@angular/core';
import { MessageService } from '../messaging/message.service';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  const msgSErvice = inject(MessageService);
  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const message = req.context.get(ERROR_MESSAGE_CONTEXT);

      msgSErvice.error(message);
      return throwError(() => err);
    })
  );
};
