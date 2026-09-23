import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonBadge, IonChip, IonLabel, IonProgressBar, IonSpinner, IonSkeletonText, IonItem
} from '@ionic/angular';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonBadge, IonChip, IonLabel, IonProgressBar, IonSpinner, IonSkeletonText, IonItem
  ],
})
export class IndicadoresPage {
  constructor() {}
}