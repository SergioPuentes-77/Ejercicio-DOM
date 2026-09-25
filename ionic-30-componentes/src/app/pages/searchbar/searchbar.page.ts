import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSearchbar,
} from '@ionic/angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.page.html',
  styleUrls: ['searchbar.page.scss'],
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
    IonSearchbar,
  ],
})
export class SearchbarPage {
  constructor() {
    addIcons({ searchOutline });
  }
}
