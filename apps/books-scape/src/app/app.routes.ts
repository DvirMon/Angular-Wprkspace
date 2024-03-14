import { Routes } from '@angular/router';
import { VolumesPageComponent } from './pages/volumes/volumes.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { BookshelfPageComponent } from './pages/shelf/shelf.component';

export const appRoutes: Routes = [
  { path: '', component: VolumesPageComponent },
  {
    path: 'basket',
    component: BookshelfPageComponent,
    // canActivate: [shelfGuard],
    resolve: [],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
