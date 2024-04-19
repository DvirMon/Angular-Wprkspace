import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, InputType, OptionsInput } from './input.model';

abstract class InputOptionsModel<T> implements OptionsInput<T> {
  public key: string;
  public control: FormControl<T>;
  public options: T[];
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  type: InputType;

  constructor({
    key,
    control,
    options,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: OptionsInput<T>) {
    this.key = key;
    this.control = control;
    this.options = options;
    this.label = label;
    this.placeHolder = placeHolder;
    this.appearance = appearance;
    this.type = InputType.AUTOCOMPLETE;
    this.icon = icon;
    this.errors = errors;
  }
}
export class InputSearchModel<T> extends InputOptionsModel<T> {
  constructor({
    key,
    control,
    options,
    appearance,
    errors,
    label,
    placeHolder,
  }: OptionsInput<T>) {
    super({
      key,
      control,
      options,
      appearance,
      errors,
      label,
      icon: 'search',
      placeHolder,
      type: InputType.AUTOCOMPLETE,
    });
  }
}

interface SelectionInput<T> extends OptionsInput<T> {
  multi: boolean;
}

export class InputSelectModel<T> extends InputOptionsModel<T> {
  multi: boolean;

  constructor({
    key,
    control,
    options,
    multi,
    appearance,
    errors,
    label,
    placeHolder,
  }: SelectionInput<T>) {
    super({
      key,
      control,
      options,
      appearance,
      errors,
      label,
      icon: 'expand_more',
      placeHolder,
      type: InputType.SELECT,
    });
    this.multi = multi;
  }
}
