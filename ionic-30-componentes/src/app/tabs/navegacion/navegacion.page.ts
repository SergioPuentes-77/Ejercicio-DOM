import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonSearchbar, IonSegment, IonSegmentButton, IonLabel,
  IonAccordionGroup, IonAccordion, IonItem
} from '@ionic/angular';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.page.html',
  styleUrls: ['./navegacion.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSearchbar, IonSegment, IonSegmentButton, IonLabel,
    IonAccordionGroup, IonAccordion, IonItem
  ],
})
export class NavegacionPage {
  constructor() {}
}