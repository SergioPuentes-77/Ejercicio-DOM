import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { personCircleOutline, personOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonAvatar,
} from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: 'avatar.page.html',
  styleUrls: ['avatar.page.scss'],
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
    IonAvatar,
  ],
})
export class AvatarPage {
  constructor() {
    addIcons({ personCircleOutline, personOutline });
  }
}
