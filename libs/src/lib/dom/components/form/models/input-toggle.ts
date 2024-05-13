import { FormControl, ValidationErrors } from '@angular/forms';
import { Appearance, BaseInput } from './input.model';
import { InputType } from './input.types';

abstract class InputBooleanMode implements BaseInput<boolean> {
  public name: string;
  public control: FormControl<boolean>;
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  helperText?: string | undefined;
  type: InputType = InputType.CUSTOM;

  constructor({
    name,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
    helperText,
  }: BaseInput<boolean>) {
    this.name = name;
    this.label = label;
    this.placeHolder = placeHolder;
    this.appearance = appearance;
    this.control = control;
    this.icon = icon;
    this.errors = errors;
    this.helperText = helperText;
  }
}

export class InputToggleModel extends InputBooleanMode {
  constructor(options: BaseInput<boolean>) {
    super({
      ...options,
      type: InputType.TOGGLE,
    });
  }
}

interface CheckboxInput extends BaseInput<boolean> {
  multi: boolean;
}

export class InputCheckboxModel extends InputBooleanMode {
  public multi: boolean;

  constructor(fields: CheckboxInput) {
    super({
      ...fields,
      type: fields.multi ? InputType.CHECKBOXGROUP : InputType.CHECKBOX,
    });

    this.multi = fields.multi;
  }
}
