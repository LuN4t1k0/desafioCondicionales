# Desafio - Condicionales

# Correcciones

[x] Eliminar archivo `.DS_Store`.
    * Comando utilizado para encontrar los archivos `find . -name .DS_Store -type f`
    * Comando utilizado para borrar los archivos `find . -name .DS_Store -type f -delete` (le agregue la bandera `-delete`)
[x] Remover espacio al final de los documentos
[ ] Hay un archivo vacio `script.js`
[x] La documentación de las funciones podría seguir algun estándar
    * recomendado leer [JSDoc](https://jsdoc.app/about-getting-started.html)
[x] Refactorizar validación de contraseña
[x] Refactorizar validación de Stickers

# Comentarios

## Border
* Todo bien. El frame no sé rompe cuando utilizo una ventana más pequeña. Los bordes son bien aplicado y buen uso deo toggle (+1).

## Password
* Todo bien. Agregue una refactorización a modo de ejemplo. Estaba bien antes de la modificación.

## Stickers
* Todo bien.
Hice refactor para mostrar otro punto de vista y entregar algunos ejemplos

# Conclusiones

Todos los ejercicios en la entrega cumplen con los requerimientos. Podrías considerar las validaciones como algo más natural cuando realices código. Y no tengas miedo a nombrar las variables de una forma más descriptiva, con el tiempo sabras cuando es demasiado larga o se debe aplicar un refactor de algún modulo.

Sigue cuidando los nombres de los archivos y sobre todo el formato del código. Hoy tenemos herramientas que automatizan el formato, es un detalle, pero los detalles importan.

No olvides agregar el README.md al repositorio y eliminar los archivos que no utilices.

Por ultimo, existe `.gitignore` que es un archivo que agregar en la base de tu proyecto e indica a GIT que archivos debe subir al repositorio y cuales no. Te recomiendo revisarlo dado que se utiliza mucho. Te dejo un [link aquí](https://www.freecodecamp.org/espanol/news/gitignore-explicado-que-es-y-como-agregar-a-tu-repositorio/).
    * Nota: No hagas ignore a un archivo que quieres eliminar de tu repositorio remoto sin antes eliminarlo del repo remoto.
