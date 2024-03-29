import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';

@Component({
  selector: 'ms-media-menu',
  standalone: true,
  imports: [MatNavList, MatListItem],
  templateUrl: './media-menu.component.html',
  styleUrl: './media-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaMenuComponent {}
