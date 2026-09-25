import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { hourglassOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonProgressBar,
} from '@ionic/angular';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progress-bar.page.html',
  styleUrls: ['progress-bar.page.scss'],
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
    IonProgressBar,
  ],
})
export class ProgressBarPage {
  constructor() {
    addIcons({ hourglassOutline });
  }
}
