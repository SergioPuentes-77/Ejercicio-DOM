import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // Lista de fotos (solo el servicio puede cambiarla)
  private photosSignal = signal<UserPhoto[]>([]);
  public readonly photos = this.photosSignal.asReadonly();

  async takeNewPhoto(
    isHighDef: boolean
  ): Promise<{ success: boolean; reason?: 'permission_denied' | 'cancelled' | 'error' }> {
    try {
      // Pedir permisos solo en celular (en el navegador no hace falta)
      if (Capacitor.isNativePlatform()) {
        const estado = await Camera.checkPermissions();
        if (estado.camera !== 'granted' || estado.photos !== 'granted') {
          const pedido = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
          if (pedido.camera !== 'granted' && pedido.photos !== 'granted') {
            return { success: false, reason: 'permission_denied' };
          }
        }
      }

      // Calidad según el interruptor
      const calidad = isHighDef ? 85 : 60;
      const ancho = isHighDef ? 1280 : 800;

      const foto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt, // deja elegir: galería o cámara
        quality: calidad,
        width: ancho,
        allowEditing: false,
        promptLabelHeader: 'Seleccionar origen',
        promptLabelPhoto: 'Desde la Galería',
        promptLabelPicture: 'Tomar Fotografía',
      });

      const nueva: UserPhoto = {
        filepath: `${Date.now()}.${foto.format}`,
        webPath: foto.webPath,
        format: foto.format,
      };

      this.photosSignal.update((fotos) => [nueva, ...fotos]);
      return { success: true };
    } catch (error: any) {
      if (error?.message?.includes('cancelled') || error?.message?.includes('User cancelled')) {
        return { success: false, reason: 'cancelled' };
      }
      console.error('Error durante la captura:', error);
      return { success: false, reason: 'error' };
    }
  }

  deletePhoto(index: number): void {
    this.photosSignal.update((fotos) => fotos.filter((_, i) => i !== index));
  }
}