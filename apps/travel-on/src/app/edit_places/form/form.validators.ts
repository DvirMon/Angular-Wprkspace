import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxSelectionValidator(max: number): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (Array.isArray(value) && value.length > max - 1) {
      return { maxSelection: true };
    }
    return null;
  };
}

export function compareString(str1: string, str2: string): boolean {
  if (!str1 || !str2) {
    return false;
  }
  return str1.toLowerCase().trim() === str2.toLowerCase().trim();
}
