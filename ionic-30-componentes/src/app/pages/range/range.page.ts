import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonRange,
  IonItem,
  IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-range',
  templateUrl: 'range.page.html',
  styleUrls: ['range.page.scss'],
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
    IonRange,
    IonItem,
    IonLabel,
  ],
})
export class RangePage {
  constructor() {
    addIcons({ optionsOutline });
  }
}
