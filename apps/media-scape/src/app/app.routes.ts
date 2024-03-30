import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/lobby/lobby.component').then(
        (m) => m.LobbyPageComponent
      ),
    title: 'The Media Scape',
  },
  {
    path: 'item/:imdbID',
    loadComponent: () =>
      import('./pages/item/item-page.component').then(
        (m) => m.ItemPageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/pnf/pnf.component').then(
        (m) => m.PnfComponent
      ),
  },
];
