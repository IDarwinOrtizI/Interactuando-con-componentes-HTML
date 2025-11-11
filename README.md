            LABORATORIO Interactuando con componentes HTML
Ejercicio 1: Encuesta de Intereses
Crear una encuesta simple que permita registrar votos y mostrar resultados en tiempo real.
1. Crea una página HTML con una encuesta que tenga 3 opciones de interés (por ejemplo:
"Diseño Web", "JavaScript", "Bases de Datos").
2. Implementa botones con el evento onclick para registrar los votos de cada opción.
3.Muestra los resultados en elementos <span> que se actualicen en tiempo real
(ejemplo: Votos: <span id="votos-js">0</span>).
4. Funcionalidades adicionales:
•Muestra un alert() con el mensaje "¡Gracias por tu voto!" cada vez que alguien vota.
•Implementa un console.log() que muestre el total acumulado de votos cada 5 votos
registrados.

Ejercicio 2: Carrito de Compras
Implementar un sistema simple de carrito de compras que actualice cantidades y precios.
1. Crea 3 productos con nombre y precio (usa elementos <span> para mostrar los precios).
2. Para cada producto, agrega un botón "Agregar al carrito" con evento onclick que:
•Actualice un contador de items totales (<span id="total-items">0</span>)
•Sume el precio al total acumulado (<span id="total-precio">0</span>)
3. Funcionalidades adicionales:
•Muestra un alert() con el mensaje "¡Envío gratis aplicado!" cuando el total supere los $50.
•Implementa un console.log() que liste los productos agregados al carrito.
4. Agrega un botón "Vaciar carrito" que:
•Restablezca todos los contadores a 0
•Muestre un alert() con el mensaje "Carrito vaciado"
