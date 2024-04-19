import { Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { BaseInput, Appearance, InputType } from './input.model';

abstract class InputBooleanMode implements BaseInput<boolean> {
  public key: string;
  public control: FormControl<boolean>;
  appearance?: Appearance | undefined;
  errors?: ValidationErrors | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  placeHolder?: string | undefined;
  type: InputType = InputType.CUSTOM;

  constructor({
    key,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<boolean>) {
    this.key = key;
    this.label = label;
    this.placeHolder = placeHolder;
    this.appearance = appearance;
    this.control = control;
    this.icon = icon;
    this.errors = errors;
  }
}

export class InputToggleModel extends InputBooleanMode {
  constructor({
    key,
    control,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: BaseInput<boolean>) {
    super({
      key,
      control,
      appearance,
      errors,
      label,
      icon,
      placeHolder,
      type: InputType.TOGGLE,
    });
  }
}

interface CheckboxInput extends BaseInput<boolean> {
  multi: boolean;
}

export class InputCheckboxModel extends InputBooleanMode {
  public multi: boolean;

  constructor({
    key,
    control,
    multi,
    appearance,
    errors,
    label,
    icon,
    placeHolder,
  }: CheckboxInput) {
    super({
      key,
      control,
      appearance,
      errors,
      label,
      icon,
      placeHolder,
      type: multi ? InputType.CHECKBOXGROUP : InputType.CHECKBOX,
    });

    this.multi = multi;
  }
}
