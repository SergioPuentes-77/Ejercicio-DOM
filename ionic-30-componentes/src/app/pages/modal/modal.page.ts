import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { browsersOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonModal,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.page.html',
  styleUrls: ['modal.page.scss'],
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
    IonModal,
    IonButton,
  ],
})
export class ModalPage {
  constructor() {
    addIcons({ browsersOutline });
  }
}
