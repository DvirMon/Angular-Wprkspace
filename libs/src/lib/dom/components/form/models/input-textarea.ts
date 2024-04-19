import { InputTextModel } from './input-text';
import { BaseInput, InputType } from './input.model';

export class InputTextareaModel extends InputTextModel {
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
      type: InputType.TEXTAREA,
    });
  }
}
