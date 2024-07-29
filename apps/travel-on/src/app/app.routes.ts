import { Routes } from '@angular/router';
import { PlacesPageComponent } from './pages/places/places.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { ResetPageComponent } from './pages/reset/reset.component';

export const appRoutes: Routes = [
  {
    path: '',
    // component: LoginPageComponent,
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginPageComponent),
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterPageComponent,

    // loadComponent: () =>
    //   import('./pages/register/register.component').then(
    //     (m) => m.RegisterPageComponent
    //   ),
    title: 'Register',
  },
  {
    path: 'reset',
    component: ResetPageComponent, //   loadComponent: () =>
    // loadComponent: () =>
    //   import('./pages/reset/reset.component').then((m) => m.ResetPageComponent),
    title: 'Reset Password',
  },
  {
    path: 'places/:userId',
    component: PlacesPageComponent, // loadComponent: () =>
    // loadComponent: () =>
    //   import('./pages/places/places.component').then(
    //     (m) => m.PlacesPageComponent
    //   ),
    title: 'Travel-On',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
