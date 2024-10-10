import { Provider } from '@angular/core';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokans';

export function provideApiUrl(): Provider {
  return { provide: API_URL, useValue: environment.apiUrl };
}
