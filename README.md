<p align="center">
  <a href="https://www.angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo"/></a>
</p>

# Mapas App

Aplicación creada utilizando **Bootstrap** la cual cuenta con 4 secciones; en la primera y segunda sección puedes visualizar mapas interactivos, hacer zoom con el mouse o mediante botones y la barra de desplazamiento, obtener el nivel de zoom, animaciones cuando se llega al límite del zoom, obtener coordenadas geográficas de donde nos estamos moviendo, entre otras cosas.

En la tercer sección podrás agregar marcadores de lugar que se diferencíen por colores aleatorios, borrar los marcadores haciendo doble-click, mover la ubicación de dichos marcadores y que sean persistentes.

La cuarta sección está dedicada a la generación de "tarjetas" reutilizables, las cuales contienen mapas que parecieran ser imagenes fijas, pero realmente es porque la posición está establecida especificamente, dichas "tarjetas" pueden usarse por ejemplo para mostrar ubicaciones de propiedades.

La App se conecta a la API de [MapBox](https://www.mapbox.com/) para su funcionamiento.

Algunos de los conceptos utilizados para la generación de ésta App, son:

1. Manejo de librerías escritas en JavaScript en TypeScript.
2. Uso de Mapas basados en Mapbox (el API es similar a la de Google Maps).
3. Marcadores.
4. Eventos.
5. FlyTo.
6. Coordenadas geográficas.
7. Componentes para re-utilización de mapas.
8. Mantener objetos de forma persistente.
9. @types.
10. Zoom.
11. Range.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.1.1.

## Servidor de Desarrollo

1. Clona el proyecto para extraer los datos del repositorio.

2. Ejecuta `npm install` para descargar e instalar los paquetes necesarios para la ejecución de la app.

No usar directamente en AngularCLI (a menos que estén creadas las variables de entorno), ya que las variables de entorno se crean basados en el .env.

3. Clonar el .env.template y renombrarlo a .env.

4. Llenar las variables de entorno.

5. Crear Angular Envs (opcional) `npm run envs`.

6. Para development ejecutar `npm run start` para generar el archivo de variables de entorno necesario y un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

7. Para producción ejecutar `npm run build` para generar el archivo de variables de entorno y los archivos de producción necesarios.
