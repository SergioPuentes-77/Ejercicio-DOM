import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { pricetagOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonBadge,
} from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: 'badge.page.html',
  styleUrls: ['badge.page.scss'],
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
    IonBadge,
  ],
})
export class BadgePage {
  constructor() {
    addIcons({ pricetagOutline });
  }
}
