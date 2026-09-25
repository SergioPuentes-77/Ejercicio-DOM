import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { swapHorizontalOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: 'segment.page.html',
  styleUrls: ['segment.page.scss'],
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
    IonSegment,
    IonSegmentButton,
    IonLabel,
  ],
})
export class SegmentPage {
  constructor() {
    addIcons({ swapHorizontalOutline });
  }
}
