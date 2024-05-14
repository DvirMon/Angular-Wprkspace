import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, BaseInput } from './input.model';
import { InputType } from './input.types';

export interface OptionsInput<T> extends BaseInput<T> {
  options: T[];
}

export abstract class InputOptionsModel<T> implements OptionsInput<T> {
  public name: string;
  public control: FormControl<T>;
  public options: T[];
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  helperText?: string | undefined;
  public type: InputType;

  constructor({
    name,
    control,
    options,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
    helperText,
  }: OptionsInput<T>) {
    this.name = name;
    this.control = control;
    this.options = options;
    this.label = label;
    this.placeHolder = placeHolder;
    this.helperText = helperText;
    this.appearance = appearance;
    this.type = InputType.AUTOCOMPLETE;
    this.icon = icon;
    this.errors = errors;
  }
}
