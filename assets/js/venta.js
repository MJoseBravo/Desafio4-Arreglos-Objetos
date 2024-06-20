

const venta = document.querySelector("#venta")
let sale = ""



for(let casa of propiedadesVentas){
   let mascotas = ""
   if (casa.pets) {
      mascotas = "<p class='message-accepted'>Se permiten mascotas</p>"
   } else {
      mascotas = "<p class='message-refused'>No se permiten mascotas</p>"
   }
   let fumar = ""
   if (casa.smoke) {
      fumar = "<p class='message-accepted'>Se permite fumar</p>"
   } else {
      fumar = "<p class='message-refused'>No se permite fumar</p>"
   }
    sale+= /*html*/  
    `<article class="casa">
    <div class="imageWrapper">
    <img src=${casa.src}></div>
    <h3>${casa.titulo}</h3>
    <p>${casa.descripcion}</p>
    <p>${casa.ubicacion}</p>
    <p>${casa.habitaciones}, ${casa.baños}</p>
    <p>${casa.costo}</p>
    <p>${fumar}</p>    
    <p>${mascotas}</p>
</article>`
}

venta.innerHTML = sale

