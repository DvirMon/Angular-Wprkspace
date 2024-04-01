import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
  Signal,
  WritableSignal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createErrorMessageEmitter, handleError, withError } from '../helper';

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
  #injector: Injector = inject(Injector);

  control = input.required<AbstractControl<unknown, unknown> | null>();
  key = input.required<string>();
  type = input<string>();
  label = input<string>();
  hint = input<string>();
  errorsMap = input<ValidationErrors>();

  formControl!: Signal<FormControl<unknown>>;

  message: WritableSignal<string> = signal('');

  @Output() blurChanged = new EventEmitter<FormControl>();

  ngOnInit(): void {
    this.formControl = computed(() => this.control() as FormControl);

    const errorEmitter = createErrorMessageEmitter(
      this.#injector,
      this.errorsMap(),
      (value) => this.message.set(value)
    );

    handleError(this.formControl(), errorEmitter);
  }

  onBlur() {
    this.blurChanged.emit(this.formControl());
  }
}
