// function apareceScroll(){
//     var html = document.getElementsByTagName("html")[0];
//     var elementoAparece = document.getElementsByClassName("logo");
    

//     document.addEventListener("wheel", function(){
//         var topVent = html.scrollTop;
//         for (i = 0; i < elementoAparece.length; i++) {
//             var topelemAparece = elementoAparece[i].offsetTop;
//             if (topVent > topelemAparece - 400) {
//                 elementoAparece[i].style.opacity = 1;
//             }
            
//         }
//     })
// }

// apareceScroll();
// console.log("f")

// SE EJECUTA CUANDO INICIA PAGINA
window.onload = function inic (){
    var nombre = document.getElementById("nombre");
    var profesion = document.getElementById("profesion");
    var foto = document.getElementById("imagen");
    
    nombre.style.fontSize = "6em";
    nombre.style.transitionDuration = "1s";

    profesion.style.fontSize = "4em";
    profesion.style.transitionDuration = "1s";

    foto.style.height = "50%";
    foto.style.width = "50%";
    foto.style.transitionDuration = "1s";
    
}

//SCROLL DE BLOQUE DE IMAGEN
function scrollbBloqueImagen(){
   var yPos = window.pageYOffset;
   var nombre = document.getElementById("nombre");
   var profesion = document.getElementById("profesion");
   var foto = document.getElementById("imagen");

   if (yPos>200) {
    nombre.style.fontSize = "5em";
    nombre.style.transitionDuration = "1s";

    profesion.style.fontSize = "3em";
    profesion.style.transitionDuration = "1s";

    foto.style.height = "40%";
    foto.style.width = "40%";
    foto.style.transitionDuration = "1s";
   } else {
    nombre.style.fontSize = "6em";
    nombre.style.transitionDuration = "1s";

    profesion.style.fontSize = "4em";
    profesion.style.transitionDuration = "1s";

    foto.style.height = "50%";
    foto.style.width = "50%";
    foto.style.transitionDuration = "1s";
   }
}

window.addEventListener("scroll", scrollbBloqueImagen);