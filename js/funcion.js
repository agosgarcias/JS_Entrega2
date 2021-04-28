class Usuario {
    constructor(Nombre, Apellido, Edad){
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.edad = Edad;
    }
    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}

class Pelotas {
    constructor(id, marca, precio, unidades= " "){
        this.id = parseInt(id);
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.unidades = parseInt(unidades);
    }

    precioTotal (){
        let precioFinal = this.precio * 1.21

    }
    
}
class Raquetas {
    constructor(id, marca, pulgadas, precio, unidades= " "){
        this.id = parseInt(id);
        this.marca = marca;
        this.pulgadas = parseFloat(pulgadas);
        this.precio = parseFloat(precio);
        this.unidades = parseInt(unidades);
    }

}

function compararPrecios (a, b){
    return a - b;
}
function compararPrecio (a, b){
    return a.precio - b.precio;
}
function compararMarca (a, b){
    if (a.marca > b.marca) {
        return 1;
      }
      if (a.marca < b.marca) {
        return -1;
      }
      return 0;
}

class Carrito {
    constructor(){
        this.lista = []
    }
}