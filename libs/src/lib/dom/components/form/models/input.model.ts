import { FormControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  NUMBER = 'number',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTISELECT = 'multiSelect',
  CALENDAR = 'calendar',
  CHECKBOX = 'checkbox',
  CHECKBOXGROUP = 'checkboxGroup',
  RADIO = 'radio',
  TOGGLE = 'toggle',
  DATE = 'date',
  DATERANGE = 'dateRange',
  TIME = 'time',
  RANGE = 'range',
  COUNTER = 'counter',
  GROUP = 'group',
  CUSTOM = 'custom',
  SUM = 'sum',
  UPLOAD = 'upload',
  CURRENCY = 'currency',
  AUTOCOMPLETE = 'autocomplete',
  TEXEDITOR = 'texteditor',
  CLEAVE = 'cleave',
}
export type Appearance = 'none' | MatFormFieldAppearance;

export interface BaseInput<T> {
  key: string;
  control: FormControl<T>;
  label?: string;
  placeHolder?: string;
  appearance?: Appearance;
  type: InputType;
  icon?: string;
  errors?: ValidationErrors;
}

export interface DateInput<T> extends BaseInput<T> {
  range: boolean;
  maxDate: Date;
  minDate: Date;
}

export interface OptionsInput<T> extends BaseInput<T> {
  options: T[];
}
