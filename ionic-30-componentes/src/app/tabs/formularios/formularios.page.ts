import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonTextarea, IonCheckbox,
  IonRadioGroup, IonRadio, IonToggle, IonSelect, IonSelectOption,
  IonRange, IonDatetime
} from '@ionic/angular';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonTextarea, IonCheckbox,
    IonRadioGroup, IonRadio, IonToggle, IonSelect, IonSelectOption,
    IonRange, IonDatetime
  ],
})
export class FormulariosPage {
  constructor() {}
}