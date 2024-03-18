import { Routes } from '@angular/router';
import { authCleanupGuard } from './auth/utils/auth-cleanup.guard';
import { LoginPageComponent } from './pages/login/login.component';
import { verifyGuard } from './pages/verify/verify.guard';
import { authLoadUserResolver } from './auth';
import { placesGuard } from './pages/places/places.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canDeactivate: [authCleanupGuard],
    title: 'Login',
  },
  {
    path: 'verify-email',
    loadComponent: () =>
      import('./pages/verify/verify.component').then(
        (m) => m.VerifyPageComponent
      ),
    canActivate: [verifyGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterPageComponent
      ),
    canDeactivate: [authCleanupGuard],
    title: 'Register',
  },
  {
    path: 'reset',
    loadComponent: () =>
      import('./pages/reset/reset.component').then((m) => m.ResetPageComponent),
    canDeactivate: [authCleanupGuard],
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
