import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';

@Component({
  selector: 'ms-img-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img
    (click)="onImageClick()"
    mat-card-image
    width="1"
    height="1"
    [ngSrc]="imgUrl()"
    [alt]="alt()"
    (error)="onError()"
    priority
  />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgCardComponent {
  imgUrl = input.required<string>();
  alt = input.required<string>();

  onError() {}
  onImageClick() {}
}
