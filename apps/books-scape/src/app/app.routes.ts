import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/volumes/volumes.component').then(
        (m) => m.VolumesPageComponent
      ),
    title: 'The Boos Scape',
  },
  {
    path: 'bookshelf',
    loadComponent: () =>
      import('./pages/shelf/shelf.component').then(
        (m) => m.BookshelfPageComponent
      ),
    title: 'Bookshelf',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/pnf/pnf.component').then(
        (m) => m.PnfComponent
      ),
    title: 'The Boos Scape',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
