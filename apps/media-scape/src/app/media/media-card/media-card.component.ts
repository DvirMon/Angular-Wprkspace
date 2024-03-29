import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  effect,
  input,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormInputComponent } from '@dom';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  Observable,
  Subject,
  distinctUntilChanged,
  filter,
  map,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { FormatDatePipe } from '../../shared/pipes/formatDate.pipe';
import { MediaResult } from '../../shared/types';

@Component({
  selector: 'ms-media-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCard,
    MatCardImage,
    MatCardContent,
    FormInputComponent,
    FormatDatePipe,
  ],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent implements OnInit {
  media = input.required<MediaResult>();

  showImg = signal(true);
  isEditable = signal(true);

  control = new FormControl('', { nonNullable: true });
  blurChanged = new Subject<void>();

  @Output() valueChanged = new EventEmitter<MediaResult>();

  private _handleValueChanged = rxMethod<string>(
    pipe(
      map((value: string) => ({ ...this.media(), Title: value })),
      tap((value) => this.valueChanged.emit(value))
    )
  );

  constructor() {
    effect(() => {
      this.control.setValue(this.media().Title);
    });
  }

  ngOnInit() {
    this._handleValueChanged(this._setSource$());
  }

  onError() {
    this.showImg.update((value) => !value);
  }

  onTitleClick() {
    this.isEditable.update((value) => !value);
  }

  onInputBlur() {
    this.isEditable.update((value) => !value);
    this.blurChanged.next();
  }

  private _setSource$(): Observable<string> {
    return this.control.valueChanges.pipe(
      switchMap((value: string) =>
        this.blurChanged.asObservable().pipe(
          map(() => value.trim()),
          distinctUntilChanged(),
          filter((value) => value != this.media().Title.trim())
        )
      )
    );
  }
}
