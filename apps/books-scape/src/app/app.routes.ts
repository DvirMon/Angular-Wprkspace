import { Routes } from '@angular/router';
import { PnfComponent } from './pages/pnf/pnf.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { cartGuard } from './pages/cart/cart.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [cartGuard],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
