import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  // Website open hote hi Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Login page - without dashboard layout
  { path: 'login', loadComponent: () => import('./pages/auth/auth').then(m => m.Auth)},
  
  // Main layout: Header + Sidebar + Content + Footer

  { path: '', loadComponent: () =>  import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      // Dashboard page
      {  path: '', loadChildren: () =>  import('./pages/pages.routes').then(m => m.PAGES_ROUTES)},
    ]
  },

  // Unknown URL
  {
    path: '**',
    redirectTo: 'login'
  }

];