// class Camiseta {
//     constructor(id, club, precio, categoria) {
//         this.id = id;
//         this.club = club;
//         this.precio = precio;
//         this.categoria = categoria;
//     }
//     mostrarProducto() {
//         return (
//             "id: " +
//             this.id +
//             " Precio: " +
//             this.precio +
//             " " +
//             " Producto: " +
//             this.club +
//             "\n"
//         );
//     }
// }

// function comprar(nombre, email, tel, productosCarrito) {
//     let total = productosCarrito.reduce((acc, item) => item.precio + acc, 0);
//     alert("Gracias " + nombre + " por tu compra. \n Total: $" + total);
// }

// let productos = [ new Camiseta (101,"Manchester United", 15000, "Ligas europeas"),
//                 new Camiseta (102,"Arsenal", 15000, "Ligas europeas"),
//                 new Camiseta (103,"Tottenham", 15000, "Ligas europeas"),
//                 new Camiseta (104,"Liverpool", 15000, "Ligas europeas"),
//                 new Camiseta (105,"Manchester City", 15000, "Ligas europeas"),
//                 new Camiseta (106,"Real Madrid", 15000, "Ligas europeas"),
//                 new Camiseta (107,"Atlético Madrid", 14000, "Ligas europeas"),
//                 new Camiseta (108,"Inter Milan", 15000, "Ligas europeas"),
//                 new Camiseta (109,"Juventus", 15000, "Ligas europeas"),
//                 new Camiseta (110,"Milan", 15000, "Ligas europeas"),
//                 new Camiseta (111,"Ajax", 14000, "Ligas europeas"),
//                 new Camiseta (112,"PSV", 13500, "Ligas europeas"),
//                 new Camiseta (201,"Argentina", 17000, "Selecciones"),
//                 new Camiseta (202,"Inglaterra", 16000, "Selecciones"),
//                 new Camiseta (203,"España", 16000, "Selecciones"),
//                 new Camiseta (204,"Italia", 17000, "Selecciones"),
//                 new Camiseta (205,"Francia", 16000, "Selecciones"),
//                 new Camiseta (206,"Nigeria", 16000, "Selecciones"),
//                 new Camiseta (301,"Argentina", 18000, "Retro"),
//                 new Camiseta (302,"Inglaterra", 18000, "Retro"),
//                 new Camiseta (303,"Rusia", 18000, "Retro"),
//                 new Camiseta (304,"Brasil", 18000, "Retro"),
//                 new Camiseta (305,"Alemania", 18000, "Retro"),];

// let categorias = ["Ligas europeas", "Selecciones", "Retro"];

// let productosCarrito = [];

// let categoria = "";

// while (categoria != "salir" && categoria != null) {
//     let aux = categorias.join("\n");
//     categoria = prompt(
//         'Ingrese una categoria para continuar con su compra o ingrese "salir": \n(' + aux + ")"
//     );

//     if (categoria != "salir" && categoria != null) {
//         let productosPorCat = productos.filter(
//             (item) => item.categoria == categoria
//         );
//         let cartel = "";
//         for (let i = 0; i < productosPorCat.length; i++) {
//             cartel += productosPorCat[i].mostrarProducto();
//         }
//         let idSeleccionado = parseInt(
//             prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
//         );
//         let productoParaCarrito = productosPorCat.find(
//             (item) => item.id == idSeleccionado
//         );
//         if (productoParaCarrito) {
//             productosCarrito.push(productosCarrito);
//         }
//     }
// }

// if (productosCarrito.length > 0) {
//     alert('Te pedimos tus datos para terminar la compra');
//     let nombre = prompt('Ingrese su nombre');
//     let mail = prompt('Ingrese su email');
//     let tel = prompt('Ingrese su telefono');
//     comprar(nombre, mail, tel, productosCarrito)};

const btnAnadirCarrito = document.querySelectorAll(".btn");
const bodyCarrito = document.querySelector(".bodyCarrito")
let carrito = [];
btnAnadirCarrito.forEach(btn =>{
  btn.addEventListener("click", anadirItemCarrito)
});

function ItemCarrito(e){
  const boton = e.target;
  const item = boton.closest(".card");
  const itemTitulo = item.querySelector(".card-title").textContent;
  const itemPrecio = item.querySelector(".precio").textContent;
  const itemImg = item.querySelector(".card-img").src;
  const nuevoItem = {
    titulo: itemTitulo,
    precio: itemPrecio,
    img: itemImg,
    cantidad: 1
  };
  anadirItemCarrito(nuevoItem)
  }

function anadirItemCarrito(nuevoItem){
  carrito.push(nuevoItem);
  cargarCarrito();
}

function cargarCarrito(){
  bodyCarrito.innerHTML = '';
  carrito.map(item => {
    let card_container = document.createElement("card_container");
    card_container.classList.add("ItemCarrito");
    const Content = `<div class="card card-2">
    <div class="card-img card-img-2"></div>
    <h4 class="card-title">${item.titulo}</h4>
    <p class="precio">${item.precio}</p>
    <input type="number" min="1" value=${item.cantidad}
</div>`
    card_container = Content;
    bodyCarrito.append(card_container)
  })
}