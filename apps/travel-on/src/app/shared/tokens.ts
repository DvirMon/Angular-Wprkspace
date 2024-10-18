import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export const API_URL = new InjectionToken<string>('API_URL');

export const DEFAULT_EMAIL = new InjectionToken<string>('DEFAULT_EMAIL');

export const ENV = new InjectionToken<typeof environment>('ENV', {
  providedIn: 'root',
  factory: () => environment,
});
