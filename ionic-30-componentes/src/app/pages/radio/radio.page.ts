import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { ellipseOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonRadioGroup,
  IonRadio,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: 'radio.page.html',
  styleUrls: ['radio.page.scss'],
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
    IonRadioGroup,
    IonRadio,
    IonItem,
  ],
})
export class RadioPage {
  constructor() {
    addIcons({ ellipseOutline });
  }
}
