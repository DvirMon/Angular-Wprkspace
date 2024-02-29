import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'apps/books-scape/src/environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl;

  if (!req.url.startsWith('?')) {
    return next(req);
  }
  return next(
    req.clone({
      url: `${baseUrl}${req.url}`,
    })
  );
};
