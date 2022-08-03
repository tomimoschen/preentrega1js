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

const Clickbutton = document.querySelectorAll('.btn')
const carritoHtml = document.querySelector('.carritoHtml')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  // setTimeout( function(){
  //   alert.classList.add('hide')
  // }, 2000)
  //   alert.classList.remove('hide')

  // const InputElemnto = div.getElementsByClassName('input__elemento')
  // for(let i =0; i < carrito.length ; i++){
  //   if(carrito[i].title.trim() === newItem.title.trim()){
  //     carrito[i].cantidad ++;
  //     const inputValue = InputElemnto[i]
  //     inputValue.value++;
  //     CarritoTotal()
  //     return null;
  //   }
  // }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  carritoHtml.innerHTML = ''
  carrito.map(item => {
    const div = document.createElement('div')
    div.classList.add('ItemCarrito')
    const Content = `
    <div class="card card-1">
                <div class="card-img card-img-1">${item.img}</div>
                <h4 class="card-title">${item.title}</h4>
                <p class="precio">${item.precio}</p>
                <button class="delete btn btn-danger">x</button>
                </div>
    
    `
    div.innerHTML = Content;
    carritoHtml.append(div)

    // div.querySelector(".delete").addEventListener('click', removeItemCarrito)
    // div.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  // CarritoTotal()
}

// function CarritoTotal(){
//   let Total = 0;
//   const itemCartTotal = document.querySelector('.itemCartTotal')
//   carrito.forEach((item) => {
//     const precio = Number(item.precio.replace("$", ''))
//     Total = Total + precio*item.cantidad
//   })

//   itemCartTotal.innerHTML = `Total $${Total}`
//   addLocalStorage()
// }

// function removeItemCarrito(e){
//   const buttonDelete = e.target
//   const tr = buttonDelete.closest(".ItemCarrito")
//   const title = tr.querySelector('.title').textContent;
//   for(let i=0; i<carrito.length ; i++){

//     if(carrito[i].title.trim() === title.trim()){
//       carrito.splice(i, 1)
//     }
//   }

//   const alert = document.querySelector('.remove')

//   setTimeout( function(){
//     alert.classList.add('remove')
//   }, 2000)
//     alert.classList.remove('remove')

//   tr.remove()
//   CarritoTotal()
// }

// function sumaCantidad(e){
//   const sumaInput  = e.target
//   const tr = sumaInput.closest(".ItemCarrito")
//   const title = tr.querySelector('.title').textContent;
//   carrito.forEach(item => {
//     if(item.title.trim() === title){
//       sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
//       item.cantidad = sumaInput.value;
//       CarritoTotal()
//     }
//   })
// }

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito')) || []
}
