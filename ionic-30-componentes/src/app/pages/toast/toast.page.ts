import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonToast,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.page.html',
  styleUrls: ['toast.page.scss'],
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
    IonToast,
    IonButton,
  ],
})
export class ToastPage {
  constructor() {
    addIcons({ chatbubbleEllipsesOutline });
  }
}
