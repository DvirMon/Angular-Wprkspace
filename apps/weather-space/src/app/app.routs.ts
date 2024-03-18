import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/lobby/lobby.component').then((m) => m.LobbyPageComponent),
    title: 'Weather Space',
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (m) => m.FavoritesPageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
