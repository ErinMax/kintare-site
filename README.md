# Kintare — Sitio de presentación

Sitio estático en español e inglés. Usa únicamente el logo oficial proporcionado por el usuario. HTML, CSS y JavaScript sin dependencias de ejecución ni servicios de aplicación.

Sitio público: https://erinmax.github.io/kintare-site/

Enlace en inglés para presentar el proyecto: https://erinmax.github.io/kintare-site/?lang=en

Repositorio: https://github.com/ErinMax/kintare-site

Cada cambio publicado en la rama `main` despliega automáticamente `dist/` mediante GitHub Pages. El primer proveedor de alojamiento no pudo recuperar el registro creado; esta versión utiliza GitHub Pages.

## Uso

Publica el contenido de `dist/` en un alojamiento de archivos estáticos. El sitio no requiere compilación ni variables de entorno. También puedes abrir `dist/index.html` directamente; para probar el portapapeles, sirve el sitio en localhost o HTTPS.

## Contenido

- Presentación de Kintare como comunidad para crear experiencias y conexiones.
- Plataforma: identidad, mundos y comunidad, con pestañas accesibles.
- Estado de desarrollo explícito y límites de integración con Minecraft/Hytale.
- Contacto real: usuario de Discord `erin_max_`, con botón para copiar.
- Idioma persistido únicamente en el navegador. Sin analítica añadida ni captación de datos desde el sitio.
- Menú móvil, navegación por teclado, movimiento reducido y aviso de privacidad.
- Logo que responde al cursor, clic, toque y teclado dentro de un área aislada del texto; indicador animado de pestañas, navegación vinculada a la sección visible y confirmación al copiar el contacto.
- Recorrido de tres preguntas con recomendaciones que cambian según interés, actividad y compañía.
- Vista guiada de Accounts con dos capturas reales, puntos explicativos y ampliación accesible.
- Tarjeta de identidad de ejemplo: nombre, iniciales o logo oficial y tres colores. No crea una cuenta ni persiste los cambios.
- Mapa de desarrollo con filtros de base implementada, validación y siguientes pasos; fecha de revisión y alcance explícitos.
- Diario con una primera entrada real sobre la presentación del proyecto, y sección sobre Kintare y Erin Gómez (Erin es un pseudónimo).
- Galería preparada para recibir propuestas. No se inventan proyectos, imágenes ni créditos; actualmente muestra una invitación a participar.
- Preparador de mensajes para acceso, colaboración o propuestas. Solo copia texto localmente; el visitante debe enviarlo por Discord. No hay envío automático, lista de espera ni concesión de acceso.
- Discord es el contacto principal; dudas por correo a `erin_Max@outlook.com`.

Las descripciones de la plataforma se basan en la estructura y superficies existentes de KintareApps revisadas durante este trabajo. No se afirma disponibilidad pública de funciones ni compatibilidad integral con juegos. La fecha 2024 y Puebla proceden de la información facilitada por el usuario.

## Referencias de diseño

Se estudiaron como referencias, sin copiar su código ni sus recursos:

- Rowan, Flowit Supply: https://www.framer.com/community/marketplace/templates/rowan/
- Gamesto, Mezario: https://www.framer.com/marketplace/templates/gamesto/

La composición final es original y utiliza los colores del logo de Kintare.

## Tipografía

Manrope, alojada localmente. Licencia SIL Open Font License, incluida junto a la fuente. Fuente oficial: https://github.com/google/fonts/tree/main/ofl/manrope

## Contacto e imágenes

El logo es el archivo proporcionado por el usuario. No se incorporan imágenes generadas. El enlace a Discord abre la aplicación web; para conversar, se debe añadir el usuario indicado. No se simula una invitación a un servidor ni se inventa un correo.

Las capturas `dist/assets/accounts-player-editor.png` (1112 × 587) y `accounts-server-setup.png` (776 × 724) proceden de la sesión de Accounts que abrió el usuario el 8 de octubre de 2026. Muestran personalización del jugador (skin, modelo, vista previa 3D, capa y nombre) y el formulario de configuración de servidor Minecraft. Se recortaron las imágenes originales para excluir UUID, historial, identidad de la cuenta y navegación administrativa. El formulario no contiene contraseñas, hosts reales ni datos de conexión; no se creó ningún servidor. Los puntos explican las opciones visibles, sin afirmar que la captura pruebe su funcionamiento o compatibilidad integral.

## Editar las secciones nuevas

`dist/index.html` contiene el texto español y la estructura. `dist/explore.css` contiene sus estilos, y `dist/explore.js` añade traducciones al inglés, el recorrido, los puntos de las capturas, la vista previa de identidad, los filtros y el preparador de mensajes. El resto de interacciones y traducciones siguen en `dist/app.js`.

Para publicar proyectos de la galería, incorporar material autorizado con nombres y créditos confirmados. Para actualizar el mapa o el diario, revisar el estado y cambiar las fechas junto con el contenido. No anunciar disponibilidad general solo porque exista una ruta o una captura.
