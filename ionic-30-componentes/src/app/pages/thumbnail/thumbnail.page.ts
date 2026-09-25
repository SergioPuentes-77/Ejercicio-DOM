import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { imageOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonThumbnail,
} from '@ionic/angular';

@Component({
  selector: 'app-thumbnail',
  templateUrl: 'thumbnail.page.html',
  styleUrls: ['thumbnail.page.scss'],
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
    IonThumbnail,
  ],
})
export class ThumbnailPage {
  constructor() {
    addIcons({ imageOutline });
  }
}
