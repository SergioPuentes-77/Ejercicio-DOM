import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, albumsOutline, alertCircleOutline, browsersOutline, calendarOutline, chatboxOutline, chatbubbleEllipsesOutline, checkboxOutline, chevronDownCircleOutline, createOutline, ellipseOutline, gridOutline, happyOutline, hourglassOutline, imageOutline, layersOutline, listOutline, menuOutline, navigateOutline, optionsOutline, personCircleOutline, pricetagOutline, pricetagsOutline, radioButtonOnOutline, readerOutline, reorderFourOutline, searchOutline, swapHorizontalOutline, syncOutline, toggleOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
} from '@ionic/angular';

interface ItemComponente {
  slug: string;
  tag: string;
  titulo: string;
  icono: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonAvatar,
  ],
})
export class HomePage {
  textoBusqueda: string = '';

  componentes: ItemComponente[] = [
    { slug: 'button', tag: 'ion-button', titulo: 'Botón', icono: 'radio-button-on-outline' },
    { slug: 'input', tag: 'ion-input', titulo: 'Campo de texto', icono: 'create-outline' },
    { slug: 'textarea', tag: 'ion-textarea', titulo: 'Área de texto', icono: 'reader-outline' },
    { slug: 'checkbox', tag: 'ion-checkbox', titulo: 'Casilla de verificación', icono: 'checkbox-outline' },
    { slug: 'radio', tag: 'ion-radio', titulo: 'Botón de radio', icono: 'ellipse-outline' },
    { slug: 'select', tag: 'ion-select', titulo: 'Selector', icono: 'list-outline' },
    { slug: 'toggle', tag: 'ion-toggle', titulo: 'Interruptor', icono: 'toggle-outline' },
    { slug: 'range', tag: 'ion-range', titulo: 'Rango deslizante', icono: 'options-outline' },
    { slug: 'datetime', tag: 'ion-datetime', titulo: 'Selector de fecha', icono: 'calendar-outline' },
    { slug: 'searchbar', tag: 'ion-searchbar', titulo: 'Barra de búsqueda', icono: 'search-outline' },
    { slug: 'card', tag: 'ion-card', titulo: 'Tarjeta', icono: 'albums-outline' },
    { slug: 'list', tag: 'ion-list', titulo: 'Lista', icono: 'reorder-four-outline' },
    { slug: 'grid', tag: 'ion-grid', titulo: 'Cuadrícula', icono: 'grid-outline' },
    { slug: 'badge', tag: 'ion-badge', titulo: 'Insignia', icono: 'pricetag-outline' },
    { slug: 'chip', tag: 'ion-chip', titulo: 'Chip', icono: 'pricetags-outline' },
    { slug: 'avatar', tag: 'ion-avatar', titulo: 'Avatar', icono: 'person-circle-outline' },
    { slug: 'thumbnail', tag: 'ion-thumbnail', titulo: 'Miniatura', icono: 'image-outline' },
    { slug: 'icon', tag: 'ion-icon', titulo: 'Icono', icono: 'happy-outline' },
    { slug: 'segment', tag: 'ion-segment', titulo: 'Segmento', icono: 'swap-horizontal-outline' },
    { slug: 'accordion', tag: 'ion-accordion', titulo: 'Acordeón', icono: 'chevron-down-circle-outline' },
    { slug: 'alert', tag: 'ion-alert', titulo: 'Alerta', icono: 'alert-circle-outline' },
    { slug: 'toast', tag: 'ion-toast', titulo: 'Toast', icono: 'chatbubble-ellipses-outline' },
    { slug: 'modal', tag: 'ion-modal', titulo: 'Modal', icono: 'browsers-outline' },
    { slug: 'popover', tag: 'ion-popover', titulo: 'Popover', icono: 'chatbox-outline' },
    { slug: 'action-sheet', tag: 'ion-action-sheet', titulo: 'Hoja de acciones', icono: 'menu-outline' },
    { slug: 'progress-bar', tag: 'ion-progress-bar', titulo: 'Barra de progreso', icono: 'hourglass-outline' },
    { slug: 'spinner', tag: 'ion-spinner', titulo: 'Spinner', icono: 'sync-outline' },
    { slug: 'fab', tag: 'ion-fab', titulo: 'Botón flotante', icono: 'add-circle-outline' },
    { slug: 'skeleton-text', tag: 'ion-skeleton-text', titulo: 'Texto esqueleto', icono: 'layers-outline' },
    { slug: 'breadcrumbs', tag: 'ion-breadcrumbs', titulo: 'Migas de pan', icono: 'navigate-outline' }
  ];

  constructor() {
    addIcons({ addCircleOutline, albumsOutline, alertCircleOutline, browsersOutline, calendarOutline, chatboxOutline, chatbubbleEllipsesOutline, checkboxOutline, chevronDownCircleOutline, createOutline, ellipseOutline, gridOutline, happyOutline, hourglassOutline, imageOutline, layersOutline, listOutline, menuOutline, navigateOutline, optionsOutline, personCircleOutline, pricetagOutline, pricetagsOutline, radioButtonOnOutline, readerOutline, reorderFourOutline, searchOutline, swapHorizontalOutline, syncOutline, toggleOutline });
  }

  get componentesFiltrados(): ItemComponente[] {
    const texto = this.textoBusqueda.toLowerCase().trim();
    if (!texto) {
      return this.componentes;
    }
    return this.componentes.filter(
      (c) => c.tag.toLowerCase().includes(texto) || c.titulo.toLowerCase().includes(texto)
    );
  }
}
