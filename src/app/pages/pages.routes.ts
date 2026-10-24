
import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [

  // Login
  { path: 'login',loadComponent: () => import('./auth/auth').then(m => m.Auth)},
  // Dashboard
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)},
  // Abouts
  { path: 'abouts', loadComponent: () => import('./abouts/abouts').then(m => m.Abouts)},

  // Content
  //   {
 //     path: 'content',
  //     loadComponent: () =>
 //       import('./content/content')
 //         .then(m => m.Content)
 //   }

];
