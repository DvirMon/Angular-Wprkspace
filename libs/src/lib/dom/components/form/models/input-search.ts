import { InputOptionsModel, OptionsInput } from './input-options';
import { InputType } from './input.types';


export class InputSearchModel<T> extends InputOptionsModel<T> {
  constructor(options: OptionsInput<T>) {
    super({
      ...options,
      icon: 'search',
      type: InputType.AUTOCOMPLETE,
    });
  }
}
