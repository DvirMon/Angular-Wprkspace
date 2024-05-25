import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, BaseInput } from './input.model';
import { InputType } from './input.types';

export interface FormOption {
  // label: string;
  // value: unknown;
  selected?: boolean;
  disabled?: boolean;
}

export interface OptionsInput<TOption = FormOption>
  extends BaseInput<TOption> {
  options: TOption[];
}

export abstract class InputOptionsModel<TOption = FormOption>
  implements OptionsInput<TOption>
{
  public name: string;
  public control: FormControl<TOption>;
  public options: TOption[];
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
  }: OptionsInput<TOption>) {
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
