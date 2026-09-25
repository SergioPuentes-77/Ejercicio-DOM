import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { calendarOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonDatetime,
} from '@ionic/angular';

@Component({
  selector: 'app-datetime',
  templateUrl: 'datetime.page.html',
  styleUrls: ['datetime.page.scss'],
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
    IonDatetime,
  ],
})
export class DatetimePage {
  constructor() {
    addIcons({ calendarOutline });
  }
}
