import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books.component';
import { CheckoutPageComponent } from './pages/checkout/checkout.component';
import { PnfComponent } from './pages/pnf/pnf.component';

export const appRoutes: Routes = [
  { path: '', component: BooksPageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    // canActivate: [cartGuard],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
