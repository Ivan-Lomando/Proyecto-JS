
var carrito = [];
let total = 0;

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = parseFloat(precio)
        
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}
function agregaralCarrito(Producto){
    carrito.push(Producto.precio);
    return carrito
}

function calcularTotal(carrito){
    for (var i = 0; i < carrito.length; i++)
    total = total + carrito[i];
    return total
}
const producto1 = new Producto("Product 1", 10.0);
const producto2 = new Producto("Product 1", 10.0);
agregaralCarrito(producto1);
agregaralCarrito(producto2);
calcularTotal(carrito)
alert(total);
