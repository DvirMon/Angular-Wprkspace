import { FormControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { BaseInputField } from './input-base.types';


export type Appearance = 'none' | MatFormFieldAppearance;

export interface BaseInput<T> extends BaseInputField {
  control: FormControl<T>;
  errors?: ValidationErrors;
}

export interface DateInput<T> extends BaseInput<T> {
  range: boolean;
  maxDate: Date;
  minDate: Date;
}
