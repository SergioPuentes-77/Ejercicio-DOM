import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'gallery-page',
    loadComponent: () => import('./gallery-page/gallery-page.page').then((m) => m.GalleryPagePage),
  },
  {
    path: '',
    redirectTo: 'gallery-page',
    pathMatch: 'full',
  },
];