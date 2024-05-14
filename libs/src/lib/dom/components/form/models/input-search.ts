import { InputOptionsModel, OptionsInput } from './input-options';
import { InputType } from './input.types';


export class InputSearchModel extends InputOptionsModel {
  constructor(options: OptionsInput) {
    super({
      ...options,
      icon: 'search',
      type: InputType.AUTOCOMPLETE,
    });
  }
}
