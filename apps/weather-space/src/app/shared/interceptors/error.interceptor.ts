import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          return event;
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
