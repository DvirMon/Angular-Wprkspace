import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'books-scape-info-page',
  standalone: true,
  imports: [TitleCasePipe, LayoutComponent],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {}
