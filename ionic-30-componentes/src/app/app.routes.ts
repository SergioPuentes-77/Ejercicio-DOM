import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.page').then((m) => m.ButtonPage),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.page').then((m) => m.InputPage),
  },
  {
    path: 'textarea',
    loadComponent: () => import('./pages/textarea/textarea.page').then((m) => m.TextareaPage),
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then((m) => m.CheckboxPage),
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio.page').then((m) => m.RadioPage),
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select.page').then((m) => m.SelectPage),
  },
  {
    path: 'toggle',
    loadComponent: () => import('./pages/toggle/toggle.page').then((m) => m.TogglePage),
  },
  {
    path: 'range',
    loadComponent: () => import('./pages/range/range.page').then((m) => m.RangePage),
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/datetime/datetime.page').then((m) => m.DatetimePage),
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./pages/searchbar/searchbar.page').then((m) => m.SearchbarPage),
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then((m) => m.CardPage),
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then((m) => m.ListPage),
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then((m) => m.GridPage),
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge/badge.page').then((m) => m.BadgePage),
  },
  {
    path: 'chip',
    loadComponent: () => import('./pages/chip/chip.page').then((m) => m.ChipPage),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then((m) => m.AvatarPage),
  },
  {
    path: 'thumbnail',
    loadComponent: () => import('./pages/thumbnail/thumbnail.page').then((m) => m.ThumbnailPage),
  },
  {
    path: 'icon',
    loadComponent: () => import('./pages/icon/icon.page').then((m) => m.IconPage),
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then((m) => m.SegmentPage),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion.page').then((m) => m.AccordionPage),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then((m) => m.AlertPage),
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then((m) => m.ToastPage),
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then((m) => m.ModalPage),
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then((m) => m.PopoverPage),
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then((m) => m.ActionSheetPage),
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./pages/progress-bar/progress-bar.page').then((m) => m.ProgressBarPage),
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/spinner/spinner.page').then((m) => m.SpinnerPage),
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then((m) => m.FabPage),
  },
  {
    path: 'skeleton-text',
    loadComponent: () => import('./pages/skeleton-text/skeleton-text.page').then((m) => m.SkeletonTextPage),
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./pages/breadcrumbs/breadcrumbs.page').then((m) => m.BreadcrumbsPage),
  },
];