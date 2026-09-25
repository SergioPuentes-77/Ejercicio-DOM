import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { gridOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.page.html',
  styleUrls: ['grid.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class GridPage {
  constructor() {
    addIcons({ gridOutline });
  }
}
