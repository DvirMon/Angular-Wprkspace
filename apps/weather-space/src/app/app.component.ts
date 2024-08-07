import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutComponent } from "./ui/layout/layout.component";

@Component({
  selector: "weather-space-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
})
export class AppComponent {}
