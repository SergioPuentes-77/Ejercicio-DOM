import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { navigateOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonBreadcrumbs,
  IonBreadcrumb,
} from '@ionic/angular';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: 'breadcrumbs.page.html',
  styleUrls: ['breadcrumbs.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonText,
    IonBreadcrumbs,
    IonBreadcrumb,
  ],
})
export class BreadcrumbsPage {
  constructor() {
    addIcons({ navigateOutline });
  }
}
