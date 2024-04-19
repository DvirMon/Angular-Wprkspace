import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, BaseInput, InputType } from './input.model';

export class InputTextModel implements BaseInput<string> {
  public key: string;
  public control: FormControl<string>;
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  type: InputType;

  constructor({
    key,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<string>) {
    this.key = key;
    this.label = label;
    this.placeHolder = placeHolder;
    this.appearance = appearance;
    this.control = control;
    this.type = InputType.TEXT;
    this.icon = icon;
    this.errors = errors;
  }
}

export class PasswordInputModel extends InputTextModel {
  constructor({
    key,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<string>) {
    super({
      key,
      control,
      appearance,
      errors,
      label,
      icon,
      placeHolder,
      type: InputType.PASSWORD,
    });
  }
}

export class EmailInputModel extends InputTextModel {
  constructor({
    key,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<string>) {
    super({
      key,
      control,
      appearance,
      errors,
      label,
      icon,
      placeHolder,
      type: InputType.EMAIL,
    });
  }
}
