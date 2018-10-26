// SE EJECUTA CUANDO INICIA PAGINA
var contador = 1;
window.onload = function inic (){
    // PARA TRANSICION AL GARGAR PAGINA AL INICIO
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



    // PARA NAVBAR
    var d = document.getElementById("menu_bar");
    var nav = document.getElementById("nav");
    
    d.addEventListener("click", function(){
        console.log("evento load detectado!  " + contador);
        if (contador== 1) {
        nav.style.left = "0px";
        nav.style.transitionDuration = "1s";
        contador = 0;
        console.log(contador);
        console.log(nav.style.left)
    } else {
        nav.style.left = "-200px";
        nav.style.transitionDuration = "1s";
        contador = 1;
        console.log(contador);
        console.log(nav.style.left)
    }
    });

    
}




// // SE EJECUTA CUANDO INICIA PAGINA
// var contador =1;
//     var d = document.getElementsByClassName("menu_bar");
//     d.addEventListener("click", myFunction);
//     function myFunction() {
//         if (contador== 1) {
//             var nav = document.getElementsByTagName("nav");
//             nav.style.left = "0";
//             contador = 0;
//         } else {
//             var nav = document.getElementsByTagName("nav");
//             nav.style.left = "-100";
//             contador = 1;
//         }
//     }




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