import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
  AlertController, ToastController, LoadingController, ActionSheetController
} from '@ionic/angular';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.page.html',
  styleUrls: ['./overlays.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class OverlaysPage {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController
  ) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Este es un mensaje de alerta',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Operación exitosa',
      duration: 2000,
    });
    await toast.present();
  }

  async mostrarCarga() {
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    setTimeout(() => loading.dismiss(), 2000);
  }

  async mostrarOpciones() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        { text: 'Editar', icon: 'create' },
        { text: 'Borrar', icon: 'trash', role: 'destructive' },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  async abrirModal() {
    const alert = await this.alertController.create({
      header: 'Modal (simulado)',
      message: 'Aquí normalmente se abriría un ion-modal con un componente propio.',
      buttons: ['Cerrar'],
    });
    await alert.present();
  }
}