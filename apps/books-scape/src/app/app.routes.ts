import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { CheckoutPageComponent } from './pages/checkout/checkout.component';

export const appRoutes: Routes = [
  { path: '', component: BooksPageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    // canActivate: [cartGuard],
    resolve : []
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
