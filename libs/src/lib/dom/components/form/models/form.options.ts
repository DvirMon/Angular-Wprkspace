import { FormControl } from '@angular/forms';

export interface FormChangeEvent<T = unknown> {
  key: string;
  index?: number;
  control?: FormControl;
  value?: T;
  query?: unknown;
}
