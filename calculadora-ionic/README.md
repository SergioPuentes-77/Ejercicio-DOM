# Calculadora Ionic

Esta es la conversión de la calculadora en Angular puro a un proyecto **Ionic + Angular** (componentes standalone).

## Qué cambió respecto al proyecto Angular original

- Los `<div>`, `<input>`, `<select>` y `<button>` normales se reemplazaron por componentes de Ionic: `ion-content`, `ion-item`, `ion-input`, `ion-select`, `ion-button`, `ion-list`, etc.
- Se agregó una barra superior (`ion-header` / `ion-toolbar`) típica de las apps móviles.
- La lógica de la calculadora (el método `operar()` y las variables `num1`, `num2`, `operador`, `resultado`, `historial`) es exactamente la misma que ya tenías, solo se movió a `src/app/home/home.page.ts`.
- Se agregaron los archivos que todo proyecto Ionic necesita: `ionic.config.json`, `src/theme/variables.scss` (colores) y `src/global.scss` (estilos base de Ionic).

## Cómo correrlo

1. Instala las dependencias (necesitas Node.js instalado):
   ```
   npm install
   ```
2. Instala la CLI de Ionic si no la tienes (una sola vez, en cualquier proyecto):
   ```
   npm install -g @ionic/cli
   ```
3. Levanta la app en el navegador:
   ```
   ionic serve
   ```
   (también funciona con `npm start`)

## Para convertirla en app móvil (opcional)

Si más adelante quieres generar la app para Android o iOS:
```
ionic build
npx cap add android
npx cap add ios
npx cap open android
```
Esto ya usa Capacitor, que es el puente que usa Ionic para empaquetar la app como app nativa.
