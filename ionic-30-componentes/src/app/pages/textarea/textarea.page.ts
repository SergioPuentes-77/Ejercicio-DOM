import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { readerOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonTextarea,
  IonItem,
} from '@ionic/angular';

@Component({
  selector: 'app-textarea',
  templateUrl: 'textarea.page.html',
  styleUrls: ['textarea.page.scss'],
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
    IonTextarea,
    IonItem,
  ],
})
export class TextareaPage {
  constructor() {
    addIcons({ readerOutline });
  }
}
