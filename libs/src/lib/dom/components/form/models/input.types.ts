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

// export interface FormGrid {
//   variant?: 'flex' | 'grid';
//   layout?: 'column' | 'row';
//   cols?: number;
//   rows?: number;
//   rowHeight?: number;
//   gutter?: number;
//   button?: ButtonGrid;
// }

// export interface ButtonGrid {
//   label?: string;
//   cols?: number;
//   skip?: number;
//   align?: 'start' | 'center' | 'end';
// }

// export interface InputGrid {
//   cols?: number;
//   rows?: number;
//   offset?: number | 'none';
//   skip?: number;
//   fullWidth?: boolean;
//   flex?: {
//     width?: number;
//     align?: string;
//   };
// }

// export interface Cleave {
//   numeral: boolean;
//   creditCard: boolean;
//   phone: boolean;
//   prefix: boolean;
//   time: boolean;
// }



// export type InputTypes = { Appearance; ControlType; Cleave; InputGrid };
