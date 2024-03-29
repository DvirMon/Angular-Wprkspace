import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'weather-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  
  defaultMessage = 'Page not Found!';
  message!: string;

  ngOnInit(): void {
    this.message =
      sessionStorage.getItem('errorMessage') || this.defaultMessage;
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
