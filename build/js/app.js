function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),i=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fijo"),i.classList.add("body-scroll")):(e.classList.remove("fijo"),i.classList.remove("body-scroll"))}))}function scrollNav(){const e=document.querySelectorAll(".navegacion-principal a"),t=document.querySelector(".inicio");e.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}),t.addEventListener("click",(function(e){const t=e.target.attributes.href.value,i=document.querySelector(t);"#principal"===t?window.scrollTo({top:0,behavior:"smooth"}):i.scrollIntoView({behavior:"smooth"})}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const i=document.createElement("picture");i.innerHTML=`\n        <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" \n        alt="imagen galeria">`,i.onclick=function(){mostrarImagen(t)},e.appendChild(i)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`<source srcset="build/img/grande/${e}.avif" type="image/avif">\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" \n    alt="imagen galeria">`;const i=document.createElement("div"),n=document.querySelector("body");i.appendChild(t),i.classList.add("overlay"),n.appendChild(i),n.classList.add("fijar-body"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),i.remove()}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map