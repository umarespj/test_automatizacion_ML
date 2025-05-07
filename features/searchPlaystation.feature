Feature: Busqueda de PlayStation 5 en Mercado libre 
Scenario: Primera prueba de busqueda, filtrar y obtener informacon de los primeros 5 resultados .
 Given El usiario accedera a la pagina de mercado libre
 when selecciona Mexico como país
 and busca "playstation 5"
 and aplica el filtro de condición del producto "Nuevo"
 and aplica el filtro de ubicación del producto "Cdmx"
 and ordena los resultados por precio de menor a mayor
 then obterner el nombre y el precio de los 5 primeros productos
