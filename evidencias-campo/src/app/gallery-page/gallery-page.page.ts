import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
  IonToggle, IonIcon, IonCard, IonCardContent, IonButton, IonImg,
  IonFab, IonFabButton, ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trash, sparkles } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.page.html',
  styleUrls: ['./gallery-page.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
    IonToggle, IonIcon, IonCard, IonCardContent, IonButton, IonImg,
    IonFab, IonFabButton,
  ],
})
export class GalleryPagePage {
  public photoService = inject(PhotoService);
  private toastController = inject(ToastController);

  // false = ahorro, true = alta definición
  public isHighDef = signal<boolean>(false);

  constructor() {
    addIcons({ camera, trash, sparkles });
  }

  toggleQuality(activado: boolean): void {
    this.isHighDef.set(activado);
  }

  async takePhoto(): Promise<void> {
    const resultado = await this.photoService.takeNewPhoto(this.isHighDef());

    if (!resultado.success && resultado.reason === 'permission_denied') {
      await this.mostrarAvisoPermisos();
    }
  }

  private async mostrarAvisoPermisos(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
      duration: 3500,
      position: 'bottom',
      color: 'danger',
      buttons: [{ text: 'Entendido', role: 'cancel' }],
    });
    await toast.present();
  }
}