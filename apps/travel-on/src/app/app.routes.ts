import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
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
    path: 'admin/:placeId',
    loadComponent: () =>
      import('./pages/edit_places/edit_places.component').then(
        (m) => m.EditPlacesPageComponent
      ),
  },
  {
    path: 'places/:userId',
    loadComponent: () =>
      import('./pages/places/places.component').then(
        (m) => m.PlacesPageComponent
      ),
    title: 'Travel-On',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
