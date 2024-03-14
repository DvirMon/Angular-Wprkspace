import { Routes } from '@angular/router';
import { VolumesPageComponent } from './pages/volumes/volumes.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { ShelfPageComponent } from './pages/shelf/shelf.component';

export const appRoutes: Routes = [
  { path: '', component: VolumesPageComponent },
  {
    path: 'basket',
    component: ShelfPageComponent,
    // canActivate: [shelfGuard],
    resolve: [],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
