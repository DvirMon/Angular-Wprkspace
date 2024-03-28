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
];
