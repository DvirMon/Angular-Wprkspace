import { InputOptionsModel, OptionsInput } from './input-options';
import { InputType } from './input.types';

export interface SelectionInput extends OptionsInput {
  multi: boolean;
}

export class InputSelectModel extends InputOptionsModel {
  multi: boolean;

  constructor(options: SelectionInput) {
    super({
      ...options,
      icon: 'expand_more',
      type: InputType.SELECT,
    });
    this.multi = options.multi;
  }
}
