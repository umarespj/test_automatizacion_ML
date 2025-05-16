# 🛠️ Test Automatización Mercado Libre 
Este proyecto automatiza la búsqueda, filtrado y obtención de información del producto PlayStation 5 en Mercado Libre México utilizando **Cucumber.js** y **Puppeteer**.

## ✅ Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior) 🟢
- [npm](https://www.npmjs.com/) (incluido con Node.js) 📦
- Un navegador compatible (Puppeteer utiliza Chromium por defecto) 🌐

### 📚 Documentación oficial:
- **Cucumber.js**:
  - [Documentación general](https://cucumber.io/docs/) 📖
  - [Guía de instalación](https://cucumber.io/docs/installation/javascript/) 🛠️
- **Puppeteer**:
  - [Documentación general](https://pptr.dev/) 📖
  - [Guía de instalación](https://pptr.dev/) 🛠️

## ⚙️ Configuración del proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/umarespj/test_automatizacion_ML.git
   cd test_automatizacion_ML
   ```

2. **Instalar las dependencias:**

   Ejecuta el siguiente comando para instalar las dependencias definidas en `package.json`:

   ```bash
   npm install
   ```


3. **Verificar la configuración:**

   Asegúrate de que las dependencias se hayan instalado correctamente ejecutando:

   ```bash
   npm list
   ```

## 🚀 Ejecución de las pruebas

1. **Ejecutar las pruebas:**

   Usa el siguiente comando para ejecutar las pruebas definidas en el archivo `.feature`:

   ```bash
   npm test
   ```

2. **Formato de salida:**

   El formato de salida predeterminado es una barra de progreso. Si deseas cambiar el formato, puedes modificar el archivo `cucumber.js`.

## 📊 Ejemplo de salida

### Salida en consola:
```bash
Primeros 5 productos: [
  {
    nombre: 'Consola Sony Playstation 5 Standard Color Blanco',
    precio: '42,000'
  },
  {
    nombre: 'Consola Sony Playstation 5 Digital Edición 30º Aniversario 1 Tb Gris Gris',
    precio: '34,999'
  },
  {
    nombre: 'Consola Sony Playstation 5 Digital 30o Aniversario 1 Tb Gris',
    precio: '24,999'
  },
  {
    nombre: 'Sony Playstation 5 Slim Digital 1tb Edición 30 Aniversario + Unidad Lectora De Discos Para Ps5.',  
    precio: '21,703'
  },
  {
    nombre: 'Consola Sony Playstation 5 Digital 30o Aniversario 1 Tb Gris',
    precio: '19,999'
  }
]
```

## 🗂️ Estructura del proyecto


- **`features/`**: Contiene los archivos `.feature` que definen los escenarios de prueba. 📄
  - `searchPlaystation.feature`: Escenario para buscar y filtrar productos en Mercado Libre.
- **`features/step_definitions/`**: Contiene las definiciones de pasos que implementan los escenarios. 🖋️
  - `searchSteps.js`: Implementación de los pasos definidos en `searchPlaystation.feature`.
     ```javascript
    When('busca {string}', async function (producto) {
        await page.type('input.nav-search-input', producto);
        await page.click('button.nav-search-btn');
        console.log(`Búsqueda realizada para: ${producto}`);
    });
    ```
- **`report/`**: Contiene los reportes generados durante la ejecución de las pruebas. 📂
  - `screenshots/`: Carpeta donde se guardan las capturas de pantalla de cada paso.
- **`cucumber.js`**: Archivo de configuración para Cucumber.js. ⚙️
  - Define el tiempo de espera predeterminado para los pasos.
  - Configura el formato de salida de los reportes.
- **`package.json`**: Archivo que define las dependencias y scripts del proyecto. 📦
  - **Puppeteer**: Biblioteca para automatizar el navegador.
  - **Cucumber.js**: Framework para pruebas basadas en BDD (Behavior-Driven Development).

## ✏️ Personalización

Si necesitas modificar los selectores o agregar nuevos escenarios, sigue estos pasos:

1. Edita el archivo `.feature` para agregar o modificar escenarios.
2. Implementa los pasos correspondientes en el archivo `searchSteps.js`.
3. Asegúrate de que los selectores utilizados en Puppeteer coincidan con los elementos de la página.


## 🤝 Contribuciones

Si deseas contribuir a este proyecto, realiza un fork del repositorio, realiza tus cambios y envía un pull request.

