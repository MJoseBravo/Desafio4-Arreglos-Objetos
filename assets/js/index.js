const homeVenta = document.querySelector("#homeVenta")
const homeAlquiler = document.querySelector("#homeAlquiler")


let countVentas = 0
let sale = ""

for(let casa of propiedadesVentas){
    if (countVentas < 3) {
        countVentas++
    } else {
        break
    }
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
homeVenta.innerHTML = sale


let count = 0
let rent = ""

for(let arriendo of propiedadesAlquiler){
    if (count < 3) {
        count++
    } else {
        break
    }
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

homeAlquiler.innerHTML = rent



    