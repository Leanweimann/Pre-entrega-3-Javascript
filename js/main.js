
// MENU DE HAMBURGUESAS


const hamburguesas = [
    {
        id: 1,
        nombre: "Simple",
        precio: 5000
    },
    {
        id: 2,
        nombre: "Doble",
        precio: 7000
    },
    {
        id: 3,
        nombre: "Completa",
        precio: 8500
    },
    {
        id: 4,
        nombre: "Cheddar",
        precio: 9000
    },
    {
        id: 5,
        nombre: "Bacon",
        precio: 10000
    },
    {
        id: 6,
        nombre: "Cuatro Quesos",
        precio: 12000
    }
];

console.log("MENU DE HAMBURGUESAS");

// FUNCION PARA MOSTRAR EL MENU

function mostrarMenu() {

    let menu = " MENU DE HAMBURGUESAS \n\n";

    for (const hamburguesa of hamburguesas) {
        menu += `${hamburguesa.id} - ${hamburguesa.nombre} - $${hamburguesa.precio}\n`;
    }

    alert(menu);

}

// FUNCION PARA BUSCAR UNA HAMBURGUESA

function buscarHamburguesa(id) {

    for (const hamburguesa of hamburguesas) {

        if (hamburguesa.id === id) {
            return hamburguesa;
        }

    }

    return null;

}

// FUNCION PARA CALCULAR EL TOTAL

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
};


// PROGRAMA PRINCIPAL


let continuar = true;

while (continuar) {

    mostrarMenu();

    let opcion = Number(prompt("Ingresa el numero de la hamburguesa que eliges:"));

    let hamburguesaElegida = buscarHamburguesa(opcion);

    if (hamburguesaElegida !== null) {

        let cantidad = Number(prompt("Cuantas hamburguesas queres?"));

        let total = calcularTotal(hamburguesaElegida.precio, cantidad);

        alert(
            "Resumen de tu compra\n\n" +
            "Hamburguesa: " + hamburguesaElegida.nombre +
            "\nCantidad: " + cantidad +
            "\nTotal a pagar: $" + total
        );

        console.log("Pedido realizado:");
        console.log(hamburguesaElegida);
        console.log("Cantidad:", cantidad);
        console.log("Total: $" + total);

    } else {

        alert("La hamburguesa ingresada no existe.");

    }

    let respuesta = prompt("Queres hacer otro pedido? (si / no)");

    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }

}

alert("Gracias por comprar en nuestro local");