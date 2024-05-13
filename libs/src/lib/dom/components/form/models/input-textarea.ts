import { InputTextModel } from './input-text';
import { BaseInput } from './input.model';
import { InputType } from './input.types';

interface TextareaFields extends BaseInput<string> {
  rows: string | number;
}

export class InputTextareaModel extends InputTextModel {
  // /**
  //  * Number of rows to display when multiline option is set to true.
  //  */
  public rows: string | number;

  constructor(options: TextareaFields) {
    super({
      ...options,
      type: InputType.TEXTAREA,
    });

    this.rows = options.rows;
  }
}
