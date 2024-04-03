import { Routes } from '@angular/router';
import { infoResolver } from './pages/info/info.resolver';

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
    path: 'info/:volId',
    loadComponent: () =>
      import('./pages/info/info-page.component').then(
        (m) => m.InfoPageComponent
      ),
    title: 'Info',
    resolve: { info: infoResolver },
  },
  {
    path: 'filters',
    loadComponent: () =>
      import('./pages/filters/filters.component').then(
        (m) => m.FiltersPageComponent
      ),
    title: 'The Boos Scape',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/pnf/pnf.component').then((m) => m.PnfComponent),
    title: 'The Boos Scape',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
