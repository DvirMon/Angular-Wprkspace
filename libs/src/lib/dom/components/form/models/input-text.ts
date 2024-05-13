import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, BaseInput } from './input.model';
import { InputType } from './input.types';

export class InputTextModel implements BaseInput<string> {
  public name: string;
  public control: FormControl<string>;
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  type: InputType;

  constructor({
    name,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<string>) {
    this.name = name;
    this.label = label;
    this.placeHolder = placeHolder;
    this.appearance = appearance;
    this.control = control;
    this.icon = icon;
    this.errors = errors;
    this.type = InputType.TEXT;
  }
}

export class PasswordInputModel extends InputTextModel {
  constructor(fields: BaseInput<string>) {
    super({
      ...fields,
      type: InputType.PASSWORD,
    });
  }
}

export class EmailInputModel extends InputTextModel {
  constructor(fields: BaseInput<string>) {
    super({
      ...fields,
      type: InputType.EMAIL,
    });
  }
}
