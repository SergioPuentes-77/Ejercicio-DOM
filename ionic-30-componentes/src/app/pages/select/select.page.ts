import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { listOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSelect,
  IonSelectOption,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: 'select.page.html',
  styleUrls: ['select.page.scss'],
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
    IonSelect,
    IonSelectOption,
    IonItem,
  ],
})
export class SelectPage {
  constructor() {
    addIcons({ listOutline });
  }
}
