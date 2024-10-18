import { Provider } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DEFAULT_EMAIL } from '../tokens';

export function provideDefaultEmail(): Provider {
  return { provide: DEFAULT_EMAIL, useValue: environment.email };
}
