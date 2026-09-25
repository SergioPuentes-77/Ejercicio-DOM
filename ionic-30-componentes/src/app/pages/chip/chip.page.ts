import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { pricetagsOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonChip,
} from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: 'chip.page.html',
  styleUrls: ['chip.page.scss'],
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
    IonChip,
  ],
})
export class ChipPage {
  constructor() {
    addIcons({ pricetagsOutline });
  }
}
