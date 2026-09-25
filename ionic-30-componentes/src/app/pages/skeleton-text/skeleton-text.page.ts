import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { layersOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSkeletonText,
  IonItem,
  IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: 'skeleton-text.page.html',
  styleUrls: ['skeleton-text.page.scss'],
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
    IonSkeletonText,
    IonItem,
    IonLabel,
  ],
})
export class SkeletonTextPage {
  constructor() {
    addIcons({ layersOutline });
  }
}
