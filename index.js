/*
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
*/
let carrito = [];
const contenido = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

productos.forEach((product)=>{

    let content = document.createElement("div");
    content.className = "card1";
    content.innerHTML = `
    <img src="${product.img}  class="card-img-top"">
    <h5  class="card-title text-center">${product.nombre}</h5>
    <p class="price">${product.precio} $ </p> 
    `;
contenido.append(content)

let comprar = document.createElement("button")
comprar.innerText = "comprar";
comprar.className = "comprar"
content.append(comprar);
comprar.addEventListener("click", ()=>{
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio:product.precio,
    });
});
});
verCarrito.addEventListener("click", ()=>{
modalContainer.innerHTML= "";
modalContainer.style.display = "flex";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML = `
    <h1 class ="modal-header-title>Carrito.</h1>
    `;
modalContainer.append(modalHeader);

const modalButton = document.createElement("h1");
modalButton.innerText = "x";
modalButton.className = "modal-header-buttton";
modalHeader.append(modalButton);

modalButton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
} )

carrito.forEach((product)=>{
    let carritoContent = document.createElement("div");
    carrito.className = "modal-content";
    carrito.innerHTML  = `
    <img src="${product.img}>
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;
    modalContainer.append(carritoContent);
    
});

    const total = carrito.reduce((acc, el )=> acc + el.precio,0);
    const total1 = document.createElement("div");
    total1.className = "total-content";
    total1.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(total1);
});