import { Routes } from '@angular/router';
import { AppLayout } from './shared/layout/app-layout/app-layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'parameters',
        loadComponent: () => import('./pages/parameters/parameters').then((m) => m.Parameters),
      },
      {
        path: 'authors',
        loadComponent: () => import('./pages/author/author').then((m) => m.Author),
      },
      {
        path: 'books',
        loadComponent: () => import('./pages/book/book').then((m) => m.Book),
      },
    ],
  },
];
