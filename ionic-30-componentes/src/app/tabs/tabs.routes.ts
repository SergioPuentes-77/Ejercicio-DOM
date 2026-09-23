import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'botones',
        loadComponent: () => import('./botones/botones.page').then((m) => m.BotonesPage),
      },
      {
        path: 'tarjetas',
        loadComponent: () => import('./tarjetas/tarjetas.page').then((m) => m.TarjetasPage),
      },
      {
        path: 'formularios',
        loadComponent: () => import('./formularios/formularios.page').then((m) => m.FormulariosPage),
      },
      {
        path: 'navegacion',
        loadComponent: () => import('./navegacion/navegacion.page').then((m) => m.NavegacionPage),
      },
      {
        path: 'indicadores',
        loadComponent: () => import('./indicadores/indicadores.page').then((m) => m.IndicadoresPage),
      },
      {
        path: 'overlays',
        loadComponent: () => import('./overlays/overlays.page').then((m) => m.OverlaysPage),
      },
      {
        path: '',
        redirectTo: 'botones',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/botones',
    pathMatch: 'full',
  },
];