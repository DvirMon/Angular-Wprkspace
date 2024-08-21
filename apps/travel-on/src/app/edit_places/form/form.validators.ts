import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxSelectionValidator(max: number): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (Array.isArray(value) && value.length > max) {
      return { maxSelection: true };
    }
    return null;
  };
}
