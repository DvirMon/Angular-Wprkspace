import { Provider } from '@angular/core';
import { environment } from '../../../environments/environment';
import { API_URL } from '../tokens';

export function provideApiUrl(): Provider {
  return { provide: API_URL, useValue: environment.apiUrl };
}
