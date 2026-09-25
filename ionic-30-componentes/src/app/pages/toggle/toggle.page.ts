import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { toggleOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonToggle,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.page.html',
  styleUrls: ['toggle.page.scss'],
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
    IonToggle,
    IonItem,
  ],
})
export class TogglePage {
  constructor() {
    addIcons({ toggleOutline });
  }
}
