import { JsonPipe, TitleCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Injector,
  Output,
  WritableSignal,
  inject,
  input,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {
  FormInputComponent,
  FormServerError,
  getFormKeys,
  handleServerErrorEffect,
} from '@dom';
import { DividerHeaderComponent } from '../../../../shared/components';
import { DEFAULT_EMAIL } from '../../../utils/constants';

interface ResetContactForm {
  email: FormControl<string>;
}

@Component({
  selector: 'to-reset-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleCasePipe,
    JsonPipe,
    MatCard,
    MatCardContent,
    MatButton,
    MatIcon,
    FormInputComponent,
    DividerHeaderComponent,
  ],
  templateUrl: './reset-contact-form.component.html',
  styleUrl: './reset-contact-form.component.scss',
})
export class ResetContactFormComponent {
  #injector = inject(Injector);

  serverError = input<FormServerError>();

  public readonly resetFormGroup: FormGroup<ResetContactForm>;
  public readonly formKeys: WritableSignal<string[]>;

  @Output() resetEmail: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.resetFormGroup = this._buildResetForm();
    this.formKeys = getFormKeys(this.resetFormGroup);

    handleServerErrorEffect(
      this.#injector,
      this.serverError,
      this.resetFormGroup
    );
  }

  private _buildResetForm(): FormGroup<ResetContactForm> {
    return inject(NonNullableFormBuilder).group({
      email: [DEFAULT_EMAIL, [Validators.required, Validators.email]],
    });
  }

  public onSubmit(value: Partial<{ email: string }>): void {
    this.resetEmail.emit(value.email as string);
  }
}
