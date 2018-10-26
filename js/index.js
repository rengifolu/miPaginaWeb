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
        nav.style.left = "-400px";
        nav.style.transitionDuration = "1s";
        contador = 1;
        console.log(contador);
        console.log(nav.style.left)
    }
    });


// PARA RESPONSIVE DE NAV
var x = window.matchMedia("(max-width: 414px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var nav = document.getElementById("nav");
function myFunction(x) {
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";
        //nav.style.opacity = "0";
        // nav.style.transition = ".5s";
        nav.style.boxShadow = "";
        // nav.style.backgroundColor = "rgb(75, 77, 75)";
        //nav.style.opacity = "0.2";
        //nav.style.color = "rgb(11, 238, 22)";
    } else {
        // document.body.style.backgroundColor = "pink";
        //nav.style.opacity = "1";
        // nav.style.transition = ".5s";
        nav.style.boxShadow = "-5px -5px 45px 5px rgb(224, 113, 9)";
        
       // nav.style.color = "rgb(11, 238, 22)";
    }
}


    
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







