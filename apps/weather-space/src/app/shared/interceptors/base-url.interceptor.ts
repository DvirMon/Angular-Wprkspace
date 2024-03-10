import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.weatherEndpoint;

  if (!req.url.startsWith('?')) {
    return next(req);
  }
  return next(
    req.clone({
      url: `${baseUrl}${req.url}`,
    })
  );
};
