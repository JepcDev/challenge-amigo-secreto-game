# Amigo Secreto

## Descripción

Este proyecto es una aplicación web sencilla que permite a los usuarios organizar un "Amigo Secreto" de manera interactiva. Los usuarios pueden:

1. Agregar nombres de amigos a una lista.
2. Visualizar los nombres ingresados en una lista dinámica.
3. Sortear de manera aleatoria un nombre de la lista y mostrar el resultado en pantalla.

## Funcionalidades

### 1. Agregar nombres
- Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a la lista haciendo clic en el botón **"Adicionar"**.
- Si el campo está vacío, el sistema muestra un mensaje de alerta pidiendo un nombre válido.

### 2. Visualizar la lista
- Cada nombre ingresado se muestra en una lista debajo del campo de entrada.

### 3. Sortear un amigo
- Al hacer clic en el botón **"Sortear Amigo"**, la aplicación selecciona un nombre aleatorio de la lista y lo muestra en pantalla.
- Si la lista está vacía, se muestra un mensaje de alerta indicando que no hay nombres para sortear.

## Tecnologías utilizadas

- **HTML5:** Para la estructura de la página.
- **CSS3:** Para el diseño responsivo y estilización de la aplicación.
- **JavaScript:** Para la lógica del proyecto, incluyendo la manipulación del DOM, validaciones y el sorteo.

## Estructura del proyecto

```
📁 challenge_amigo_secreto
├───📁 assets/                        # Archivos estaticos del proyecto
│   ├───📄 amigo-secreto.png
│   └───📄 play_circle_outline.png
├───📄 app.js                         # Archivo JavaScript con la lógica del proyecto
├───📄 index.html                     # Archivo principal de la aplicación
├───📄 README.md                      # Documentación del proyecto
└───📄 style.css                      # Archivo de estilos
```

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git@github.com:JepcDev/challenge-amigo-secreto-game.git
   ```

2. Abre el archivo `index.html` en tu navegador web.

## Uso

1. Escribe un nombre en el campo de texto y haz clic en el botón **"Adicionar"**.
2. Repite el proceso para agregar todos los nombres deseados.
3. Haz clic en **"Sortear Amigo"** para seleccionar un nombre al azar.

## Ejemplo visual

![Vista previa de la aplicación](https://jepcdev.github.io/challenge-amigo-secreto-game/)

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agregar nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

---

¡Diviértete organizando tu Amigo Secreto! 🎉