let listaProductos = [];
let carrito = [];
let total = 0;

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

function agregarProducto(nombre, precio) {
    let producto = new Producto(nombre, precio);
    listaProductos.push(producto);
    console.log('Producto agregado al sistema:', producto);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
}

function calcularTotal(carrito) {
    total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

let agregarMasProductos = true;

while (agregarMasProductos) {
    let nombreProducto = prompt('Ingrese el nombre del producto:');
    let precioProducto = parseFloat(prompt('Ingrese el precio del producto:'));
    
    agregarProducto(nombreProducto, precioProducto);
    agregarAlCarrito(listaProductos[listaProductos.length - 1]);
    
    let respuesta = prompt('¿Desea agregar otro producto al carrito? (Sí/No)');
    if (respuesta.toLowerCase() !== 'sí' && respuesta.toLowerCase() !== 'si') {
        agregarMasProductos = false;
    }
}

total = calcularTotal(carrito);
alert('Total del carrito: ' + total);
