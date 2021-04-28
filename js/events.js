let limpiar = document.getElementById("clean");

limpiar.onclick = () => {
    let lista = document.getElementById("myCarrito");
    lista.parentNode.removeChild(lista)
    console.log("Voy a limpiar el carrito")
};