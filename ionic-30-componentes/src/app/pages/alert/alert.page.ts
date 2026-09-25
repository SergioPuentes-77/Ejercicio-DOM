import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonAlert,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  styleUrls: ['alert.page.scss'],
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
    IonAlert,
    IonButton,
  ],
})
export class AlertPage {
  constructor() {
    addIcons({ alertCircleOutline });
  }
}
