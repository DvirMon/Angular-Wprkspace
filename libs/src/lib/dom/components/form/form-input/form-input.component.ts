import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Signal,
  WritableSignal,
  computed,
  inject,
  input,
  signal
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorService } from '../form-error.service';

@Component({
  selector: 'dom-form-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {

  #formError = inject(FormErrorService);

  control = input.required<AbstractControl<unknown, unknown> | null>();
  key = input.required<string>();
  type = input<string>();
  label = input<string>();
  hint = input<string>();
  messagesMap = input<ValidationErrors>();

  formControl!: Signal<FormControl<unknown>>;

  message: WritableSignal<string> = signal('');

  @Output() blurChanged = new EventEmitter<FormControl>();

  ngOnInit(): void {
    this.formControl = computed(() => this.control() as FormControl);

    const errorEmitter = this.#formError.createErrorMessageEmitter(
      this.messagesMap(),
      (value) => this.message.set(value)
    );

    this.#formError.handleError(this.formControl(), errorEmitter);
  }

  onBlur() {
    this.blurChanged.emit(this.formControl());
  }
}
