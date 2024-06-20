

const alquiler = document.querySelector("#alquiler")
let rent = ""


for(let arriendo of propiedadesAlquiler){
    let mascotas = ""
   if (arriendo.pets) {
      mascotas = "<p class='message-accepted'>Se permiten mascotas</p>"
   } else {
      mascotas = "<p class='message-refused'>No se permiten mascotas</p>"
   }
   let fumar = ""
   if (arriendo.smoke) {
      fumar = "<p class='message-accepted'>Se permite fumar</p>"
   } else {
      fumar = "<p class='message-refused'>No se permite fumar</p>"
   }
    rent+= /*html*/  
    `<article class="arriendo">
    <div class="imageWrapper">
    <img src=${arriendo.src}></div>
    <h3>${arriendo.titulo}</h3>
    <p>${arriendo.descripcion}</p>
    <p>${arriendo.ubicacion}</p>
    <p>${arriendo.habitaciones}, ${arriendo.baños}</p>
    <p>${arriendo.costo}</p>
    <p>${fumar}</p>
    <p>${mascotas}</p>    
</article>`
}

alquiler.innerHTML = rent