import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ERROR_MESSAGE_CONTEXT } from './error-message.context';
// import { MessageService } from '@app/shared/ui-messaging';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  // const uiMessage = inject(MessageService);

  return handle(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status == 503) {
      }
      const errorMessageContext = req.context.get(ERROR_MESSAGE_CONTEXT);
      // uiMessage.error(errorMessageContext);
      console.log(errorMessageContext);
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      );
    })
  );
};
