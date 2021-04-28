let entradaName = prompt("Ingresar nombre")
let entradaLastName = prompt("Ingresar Apellido")
let entradaAge = prompt("Ingresar edad")

while((entradaName != "") && (entradaLastName != "") && (entradaAge != "")) {
    alert("Ingrese sus datos, por favor")
    break;
}

const usuario1 = new Usuario(entradaName, entradaLastName, entradaAge);

usuario1.validar();
let bienvenida = alert("Bienvenido/a " + entradaName + " a nuestro Club!")


const categoria1 = []

categoria1.push(new Pelotas(1, "babolat", 50, 3));
categoria1.push(new Pelotas(2, "babolat", 42, 6));
categoria1.push(new Pelotas(3, "wilson", 60, 3));
categoria1.push(new Pelotas(4, "dunlop", 90, 3));

const categoria2 = []

categoria2.push(new Raquetas(1, "babolat", 17.5, 3450, 1));
categoria2.push(new Raquetas(2, "babolat", 21, 4330, 1));
categoria2.push(new Raquetas(3, "wilson", 27, 7200, 1));
categoria2.push(new Raquetas(4, "prince", 25, 7800, 1));
categoria2.push(new Raquetas(5, "dunlop", 23.5, 6450, 1));

let precios = [];
for (const Pelotas of categoria1) {
    precios.push(Pelotas.precio);
}
for (const Raquetas of categoria2) {
    precios.push(Raquetas.precio);
}
console.log(precios)

let ordenarPrecios = precios.sort(compararPrecios);
    console.log(ordenarPrecios)

let ordenarPrecioCat1 = categoria1.sort(compararPrecio);
    console.log(ordenarPrecioCat1)

let ordenarMarcaCat2 = categoria2.sort(compararMarca);
    console.log(ordenarMarcaCat2)

//categoria2.precioTotal()

for (const Pelotas of categoria1) {
    console.log(Pelotas.precio);
}
for (const Pelotas of categoria1) {
    console.log(Pelotas.precioTotal());
}

// - DOM -

let subtitulo = document.createElement("p");
    subtitulo.innerHTML = "Para tu comodidad tenemos las siguientes opciones:"

let incluirSubtitulo = document.getElementById("main");
    incluirSubtitulo.appendChild(subtitulo)

let tituloPelotas = document.createElement('p');
    tituloPelotas.innerHTML = "Pelotas"

let categorias = document.getElementById("main");

categorias.appendChild(tituloPelotas)

for (const Pelotas of categoria1) {
    let parrafoPelotas = document.createElement('li');
    parrafoPelotas.innerHTML = `Producto: ${Pelotas.marca} - Precio: ${Pelotas.precio}`
    categorias.appendChild(parrafoPelotas);
}
let tituloRaquetas = document.createElement('p');
    tituloRaquetas.innerHTML = "Raquetas"

categorias.appendChild(tituloRaquetas)

for (const Raquetas of categoria2) {
    let parrafoRaquetas = document.createElement('li');
    parrafoRaquetas.innerHTML = `Producto: ${Raquetas.marca} - Precio: ${Raquetas.precio}`
    categorias.appendChild(parrafoRaquetas) 
}

// - LocalStorage - 

localStorage.setItem("Nombre", entradaName)

// - Evento -

let limpiar = document.getElementById("limpiar");

limpiar.onclick = () => {
    let lista = document.getElementById("myCarrito");
    lista.parentNode.removeChild(lista)
    console.log("Voy a limpiar el carrito")
}

