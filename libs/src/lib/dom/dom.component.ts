import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'dom-app',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomComponent {}
