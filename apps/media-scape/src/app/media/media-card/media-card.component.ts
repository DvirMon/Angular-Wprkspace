import { NgOptimizedImage, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardImage
} from '@angular/material/card';
import { FormInputComponent } from '@dom';
import { MediaResult } from '../../shared/types';
import { FormatDatePipe } from '../../shared/pipes/formatDate.pipe';

@Component({
  selector: 'ms-media-card',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatCard,
    MatCardImage,
    MatCardContent,
    FormInputComponent,
    FormatDatePipe
  ],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent implements OnInit {
  media = input.required<MediaResult>();

  showImg = signal(true);
  isEditable = signal(true);

  control!: FormControl<string>;

  ngOnInit() {
    this.control = new FormControl(this.media().Title, { nonNullable: true });
  }

  onError(event: ErrorEvent) {
    this.showImg.update((value) => !value);
  }

  onTitleClick() {
    this.isEditable.update((value) => !value);
  }
}
