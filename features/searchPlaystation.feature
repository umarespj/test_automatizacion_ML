Feature: Busqueda de PlayStation 5 en Mercado libre 
    Scenario: Primera prueba de busqueda, filtrar y obtener informacion de los primeros 5 resultados
                Given El usuario accedera a la pagina web de Mercado Libre
                When selecciona México como país
                And busca "playstation 5"
                And aplica el filtro de condición del producto "Nuevo"
                And aplica el filtro de ubicación del producto "Cdmx"
                And ordena los resultados por precio de mayor a menor
                Then obtener el nombre y el precio de los 5 primeros productos
