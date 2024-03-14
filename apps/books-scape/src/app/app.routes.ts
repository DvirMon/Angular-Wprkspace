import { Routes } from '@angular/router';
import { VolumesPageComponent } from './pages/volumes/volumes.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { BookshelfPageComponent } from './pages/shelf/shelf.component';

export const appRoutes: Routes = [
  { path: '', component: VolumesPageComponent, title: 'The Boos Scape' },
  {
    path: 'bookshelf',
    component: BookshelfPageComponent,
    // canActivate: [shelfGuard],
    resolve: [],
    title: 'Bookshelf',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
