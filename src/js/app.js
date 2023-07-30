document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
})

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();

}

function navegacionFija() {
    const barra=document.querySelector(".header");
    const sobreFestival= document.querySelector(".sobre-festival");
    const body = document.querySelector("body");

    window.addEventListener("scroll", function () {
        
        if (sobreFestival.getBoundingClientRect().top<0) {
            barra.classList.add("fijo");
            body.classList.add("body-scroll");
        }
        else{
            barra.classList.remove("fijo");
            body.classList.remove("body-scroll");
        }
 
    });

 
    
}

function scrollNav() {
    const enlaces= document.querySelectorAll(".navegacion-principal a"); //Selecciona todos con a
    const principal=document.querySelector(".inicio");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
          e.preventDefault();
          const seccionScroll = this.getAttribute("href");
          const seccion = document.querySelector(seccionScroll);
          seccion.scrollIntoView({ behavior: "smooth" });
        });
        
    });
    principal.addEventListener("click", function (i) {
        const scrollPrincipal = i.target.attributes.href.value;
        const volver = document.querySelector(scrollPrincipal);
      
        if (scrollPrincipal === "#principal") {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else {
          volver.scrollIntoView({ behavior: "smooth" });
        }
      
      
      });
      
};


function crearGaleria() {
    const galeria=document.querySelector (".galeria-imagenes")

    for (let i = 1; i <= 12; i++) {
        //Crea el el indice
        const imagen= document.createElement("picture");
        //Crea todo el html de la imagen 
        imagen.innerHTML= `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" 
        alt="imagen galeria">`; //Llamo a cada imagen con dicho For 

        imagen.onclick=function () {
            mostrarImagen(i); //Añade el numero de imagen
        }
        galeria.appendChild(imagen); //Se agrega al html

    }

}

function mostrarImagen(indice) {
    const imagen= document.createElement("picture");

    imagen.innerHTML= `<source srcset="build/img/grande/${indice}.avif" type="image/avif">
    <source srcset="build/img/grande/${indice}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${indice}.jpg" 
    alt="imagen galeria">`; //Llamo a cada imagen con dicho For .



    //Creando Overlay de la imagen
    const overlay =document.createElement("div");
    const body=document.querySelector("body");
    overlay.appendChild(imagen); //Añade el div a la funcion
    overlay.classList.add("overlay"); //Añadiendo la clase y mandandola al html
   
     //Añadirlo al HTML
    body.appendChild(overlay);
    body.classList.add("fijar-body"); //añado una clase para que no haga scroll

    //Function para quitar la imagen
    overlay.onclick=function(){
        const body=document.querySelector("body");
        body.classList.remove("fijar-body");
        overlay.remove();
    }

    
}

