import { InputOptionsModel, OptionsInput } from './input-options';
import { InputType } from './input.types';

export interface SelectionInput<T> extends OptionsInput<T> {
  multi: boolean;
}

export class InputSelectModel<T> extends InputOptionsModel<T> {
  multi: boolean;

  constructor(options: SelectionInput<T>) {
    super({
      ...options,
      icon: 'expand_more',
      type: InputType.SELECT,
    });
    this.multi = options.multi;
  }
}
