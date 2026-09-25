import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { createOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonInput,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: 'input.page.html',
  styleUrls: ['input.page.scss'],
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
    IonInput,
    IonItem,
  ],
})
export class InputPage {
  constructor() {
    addIcons({ createOutline });
  }
}
