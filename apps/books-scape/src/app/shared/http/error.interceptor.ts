import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
// import { MessageService } from '@app/shared/ui-messaging';

export const errorInterceptor: HttpInterceptorFn = (req, handle) => {
  // const uiMessage = inject(MessageService);

  return handle(req).pipe(
    catchError((err) => {
      console.log('errorInterceptor', err)
      // const errorMessageContext = req.context.get(ERROR_MESSAGE_CONTEXT);
      // uiMessage.error(errorMessageContext);
      return throwError(() => err);
    })
  );
};
