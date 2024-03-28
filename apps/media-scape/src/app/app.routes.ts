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
    path: 'media/:id',
    loadComponent: () =>
      import('./pages/media/media-page.component').then(
        (m) => m.MediaPageComponent
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
