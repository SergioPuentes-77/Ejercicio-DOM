import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { chatboxOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonPopover,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: 'popover.page.html',
  styleUrls: ['popover.page.scss'],
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
    IonPopover,
    IonButton,
  ],
})
export class PopoverPage {
  constructor() {
    addIcons({ chatboxOutline });
  }
}
