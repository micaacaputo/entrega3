//Le pedimos al usuario que seleccione sus productos
let producto = prompt("Seleccione un producto: \n A: Producto 1 \n B: Producto 2 \n C: Producto 3");

while(producto != "NO") {

    seleccionarProductos(producto);

producto = prompt("¿Desea seleccionar otro? Escriba SI o NO");

if(producto == "SI") {

    producto = prompt("Seleccione un producto: \n A: Porducto 1 \n B: Producto 2 \n C: Porducto 3");
    seleccionarProductos(producto);
} else {
    console.log("Gracias vuelva prontos");
    console.log("La suma total de sus productos es: ")
}
}

function seleccionarProductos (productos) {
    switch(producto.toUpperCase()){
        case 'A':
            let precio = 
            console.log("Usted seleccionó Producto 1. Precio $2000");
            break;
        case 'B':
            console.log("Usted seleccionó Producto 2. Precio $1000");
            break;
        case 'C':
            console.log("Usted seleccionó Producto 3. Precio $500");
            break; 
        default:
            console.log("Intente nuevamente");
            break;
    }   
}
