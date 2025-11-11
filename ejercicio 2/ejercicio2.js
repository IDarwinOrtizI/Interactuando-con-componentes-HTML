let totalItems = 0;
let totalPrecio = 0;
const carrito = []; 

const totalItemsSpan = document.getElementById('total-items');
const totalPrecioSpan = document.getElementById('total-precio');
const EnvioGratis = 50.00; 

function addToCart(productName, productPrice) {
    totalItems += 1;
    totalPrecio += productPrice;

    totalItemsSpan.textContent = totalItems;
    totalPrecioSpan.textContent = totalPrecio.toFixed(2); 

    if (totalPrecio >= EnvioGratis && (totalPrecio - productPrice) < EnvioGratis) {
        alert("¡Envío gratis aplicado!");
    }

    carrito.push(productName);
    console.log("Producto Agregado");
    console.log(`Producto: ${productName}, Precio: $${productPrice.toFixed(2)}`);
    console.log("Productos actuales en el carrito:", carrito);
}

function clearCart() {
    totalItems = 0;
    totalPrecio = 0;
    carrito.length = 0; 

    totalItemsSpan.textContent = totalItems;
    totalPrecioSpan.textContent = totalPrecio.toFixed(2);

    alert("Carrito vaciado");

    console.log("--- Carrito Vaciado ---");
}