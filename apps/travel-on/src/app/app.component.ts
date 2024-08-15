import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStore } from './auth/store/store';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'to-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthStore],
})
export class AppComponent {}
