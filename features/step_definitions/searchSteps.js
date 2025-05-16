// Importar las dependencias necesarias
/** //Esto se utiliza cuando la configuracion package.json esta en modo "type": "module"
import puppeteer from 'puppeteer';
import { Given, When, Then } from '@cucumber/cucumber';
 */
const puppeteer = require('puppeteer');
const { Given, When, Then } = require('@cucumber/cucumber');


let browser;
let page;

Given('El usuario accedera a la pagina web de Mercado Libre', async function () {

   try {
      //Inicia el navegador en modo visible
    browser = await puppeteer.launch({ headless: false });

    // Abre una nueva página en el navegador
    page = await browser.newPage();

    // Navega a una URL de mercado libre
    await page.goto('https://www.mercadolibre.com/');  

      // toma una captura de pantalla de la página
    await page.screenshot({ path: `report/screenshots/1_portal_Mercado_Libre.png` });

   } catch (error) {
      console.error("Error al iniciar el navegador:", error);
   }
  
});

When('selecciona México como país', async function () {
   try{
         // Espera a que el listado de paises esté presente en el DOM y sea visible
         await page.waitForSelector('nav ul.ml-site-list');
         //localiza el elmento de la lista de paises y hace clic en el
         await page.locator('nav ul.ml-site-list li.ml-site-mlm').click();
         
         await page.screenshot({ path: `report/screenshots/2_selecciona_Mexico.png` });

   }catch (error) {
      console.error("Error al seleccionar el país:", error);
   }
});


When('busca {string}', async function ( Producto) {

   try{
      // Espera a que el campo de búsqueda esté presente en el DOM y sea visible
      await page.waitForSelector('input.nav-search-input');

      // Escribe el término de búsqueda (Producto) en el campo de búsqueda
      await page.type('input.nav-search-input', Producto);

      // Localiza y hace clic en el botón de búsqueda
      await page.locator('button.nav-search-btn').click();

      await page.screenshot({ path: `report/screenshots/3_Ingresa_Producto_playstation_5.png` });
   }catch (error) {
      console.error("Error al realizar la busqueda:", error);
   }

});

When('aplica el filtro de condición del producto {string}', async function (condicionNuevo) {
try{
   // Espera a que elemento este precente en el DOM y se visible antes de hacer clic
    await page.waitForSelector('.ui-search-filter-dl');

    //localiza el elemento de la lista de condiciones y hace clic en el
    await page.locator(`.ui-search-filter-dl a[title^="${condicionNuevo}"]`).click();

    // Captura de pantalla después de hacer clic
    await page.screenshot({ path: `report/screenshots/4_filtro_condicion_nuevo.png`},{timeout: 10000});
}catch (error) {
   console.error("Error al aplicar el filtro de condición:", error);
}
});

/** Importante: La Ciudad de México (CDMX) antes se llamaba Distrito Federal (D.F.),
 *  pero en 2016 cambió oficialmente su nombre a CDMX */

When ('aplica el filtro de ubicación del producto {string}', async function (Ciudad) {
   try{
     const tituloFiltro = Ciudad === "Cdmx" ? "Distrito Federal" : Ciudad;
      // Espera a que el elemento de filtro de ubicación esté presente en el DOM y sea visible
      await page.waitForSelector('.ui-search-filter-dl');
      // localica el filtro de ubicacion con titulo "Distrito Federal" y da clic en el
      await page.locator(`.ui-search-filter-dl a[title^="${tituloFiltro}"]`).click();
     
      await page.screenshot({ path: `report/screenshots/5_filtroUbicacion_${Ciudad}.png` },{timeout: 10000});

   }catch (error) {
      console.error("Error al aplicar el filtro de ubicación:", error);
   }
});

When('ordena los resultados por precio de mayor a menor',async function () {
       
   try{ 
         await page.waitForNavigation({ waitUntil: 'networkidle2' });
         
         await page.waitForSelector('.andes-dropdown__trigger', { visible: true, timeout: 10000 });
         await page.click('.andes-dropdown__trigger');

         // Esperar a que el menú desplegable esté visible
         await page.waitForSelector('li[data-key="price_desc"]', { visible: true, timeout: 10000 });

         // Hacer clic en la opción "Mayor precio"
         await page.click('li[data-key="price_desc"]');

         await page.screenshot({ path: `report/screenshots/6_OrdenarResultados.png` },{timeout: 20000});

   }catch (error) {
      console.error("Error al ordenar los resultados por precio de mayor a menor:", error);
   }
 });
 


Then('obtener el nombre y el precio de los 5 primeros productos', async function () {

   try{
      await page.waitForSelector('.ui-search-layout__item', { visible: true, timeout: 10000 });
     const productos = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll(".ui-search-layout__item"));
         // Filtra los elementos que tienen el precio y nombre
        return items.slice(0, 5).map(item => {
            const nombre = item.querySelector(".poly-component__title-wrapper a")?.textContent.trim();
            const precio = item.querySelector(".andes-money-amount__fraction")?.textContent.trim();
            return { nombre, precio };
        });

    });
   console.log("Primeros 5 productos:", productos); 

 
   }catch (error) {
      console.error("Error al obtener el nombre y el precio de los productos:", error);
   }finally{
      // Cierra el navegador después de obtener los resultados
      await browser.close();
   }
});
  



 