import { Routes } from '@angular/router';
import { authLoadUserResolver } from './auth';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginPageComponent),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterPageComponent
      ),
    title: 'Register',
  },
  {
    path: 'reset',
    loadComponent: () =>
      import('./pages/reset/reset.component').then((m) => m.ResetPageComponent),
    title: 'Reset Password',
  },
  {
    path: 'places/:userId',
    loadComponent: () =>
      import('./pages/places/places.component').then((m) => m.PlacesComponent),
    // canActivate: [placesGuard],
    resolve: { authLoadUserResolver },
    title: 'Travel-On',
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
];
