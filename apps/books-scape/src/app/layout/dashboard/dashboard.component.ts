/* eslint-disable @angular-eslint/component-selector */
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { Component, Signal, inject } from "@angular/core";

import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

import { AppSignalSore } from "../../store/store";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
  ],
})
export class DashboardComponent {

  #breakpointObserver = inject(BreakpointObserver);
  #store = inject(AppSignalSore);

  protected readonly title: string = "books scape";

  public readonly selectedBooks: Signal<string> = this.#store.selectedBooks;

  isHandset$: Observable<boolean> = this.#breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
