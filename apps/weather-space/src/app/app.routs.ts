import { Routes } from "@angular/router";
import { LobbyComponent } from "./pages/lobby/lobby.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: LobbyComponent,
    title : "Weather Space"
  },
  {
    path: "favorites",
    loadComponent: () =>
      import("./pages/favorites/favorites.component").then(
        (m) => m.FavoritesLayoutComponent
      ),
  },
  {
    path: "",
    redirectTo: "lobby",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
