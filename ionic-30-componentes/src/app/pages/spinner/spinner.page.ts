import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { syncOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSpinner,
} from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.page.html',
  styleUrls: ['spinner.page.scss'],
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
    IonSpinner,
  ],
})
export class SpinnerPage {
  constructor() {
    addIcons({ syncOutline });
  }
}
