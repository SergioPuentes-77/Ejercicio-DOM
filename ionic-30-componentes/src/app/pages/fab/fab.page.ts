import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircleOutline, addOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonFab,
  IonFabButton,
} from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: 'fab.page.html',
  styleUrls: ['fab.page.scss'],
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
    IonFab,
    IonFabButton,
  ],
})
export class FabPage {
  constructor() {
    addIcons({ addCircleOutline, addOutline });
  }
}
