import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { BasketPageComponent } from './pages/basket/basket.component';

export const appRoutes: Routes = [
  { path: '', component: BooksPageComponent },
  {
    path: 'basket',
    component: BasketPageComponent,
    // canActivate: [basketGuard],
    resolve: [],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PnfComponent },
];
