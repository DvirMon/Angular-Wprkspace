import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
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
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';

import {
  DividerHeaderComponent,
  FormInputComponent,
  FormServerError,
  getFormKeys,
  handleServerErrorEffect,
} from '@dom/components';
import { EmailAndPasswordSignIn, SignInEvent, SignInMethod } from '../../utils';
import { DEFAULT_EMAIL } from '../../utils/constants';
import { FormErrorService } from 'libs/src/lib/dom/components/form/form-error.service';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'to-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    MatIcon,
    TitleCasePipe,
    DividerHeaderComponent,
    FormInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  #injector = inject(Injector);

  #formError = inject(FormErrorService);

  public readonly loginFormGroup: FormGroup<LoginForm>;

  public readonly serverError = input<FormServerError>();

  public readonly errorsMap: { [key: string]: ValidationErrors } = {
    password: {
      minlength: 'password is to short',
      maxlength: 'password is to long',
    },
  };

  public readonly formKeys: WritableSignal<string[]>;

  @Output() login: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() google: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() otp: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() emailLink: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() forget: EventEmitter<void> = new EventEmitter();

  constructor() {
    this._setGoogleIcon();

    this.loginFormGroup = this.buildLoginForm();

    this.formKeys = getFormKeys(this.loginFormGroup);

    this.#formError.handleServerErrorEffect(
      this.serverError,
      this.loginFormGroup
    );
  }

  private _setGoogleIcon(): void {
    inject(MatIconRegistry).addSvgIcon(
      'google',
      inject(DomSanitizer).bypassSecurityTrustResourceUrl(
        'assets/icons/google-icon.svg'
      )
    );
  }

  private buildLoginForm(): FormGroup<LoginForm> {
    return inject(NonNullableFormBuilder).group({
      email: [DEFAULT_EMAIL, [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  public oGoogleSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.GOOGLE);
    this.google.emit(event);
  }

  public onSubmit(value: Partial<EmailAndPasswordSignIn>): void {
    const event = this._createSignInEvent(SignInMethod.EMAIL_PASSWORD, value);
    this.login.emit(event);
  }

  public onOtpSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.OPT);
    this.otp.emit(event);
  }

  public onEmailLinkSignIn() {
    const event = this._createSignInEvent(SignInMethod.EMAIL_LINK);
    this.emailLink.emit(event);
  }

  public onForgetPassword() {
    this.forget.emit();
  }

  private _createSignInEvent(
    method: SignInMethod,
    data?: unknown
  ): SignInEvent {
    return {
      method,
      data,
    } as SignInEvent;
  }
}
