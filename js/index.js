// SE EJECUTA CUANDO INICIA PAGINA
var contador = 1;
var nombre = null;
var profesion = null;
var foto = null;
window.onload = function inic (){
    nombre = document.getElementById("nombre");
    profesion = document.getElementById("profesion");
    foto = document.getElementById("imagen");

    
    hobie ();


// PARA RESPONSIVE DE NAV
var x = window.matchMedia("(max-width: 414px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//var nav = document.getElementById("nav");
    function myFunction(x) {
        if (x.matches) { // If media query matches
            // document.body.style.backgroundColor = "yellow";

            
            //nav.style.boxShadow = "0";
            window.addEventListener("scroll", apareceScroll2); 
            primeroResponsive();
            navBar();
            
        
        } else { 
            // SI ES MAS GRANDE Q IPHONE
            primero();
            window.addEventListener("scroll", scrollbBloqueImagen);
            window.addEventListener("scroll", scrollNavbar);
            window.addEventListener("scroll", apareceScroll);
            
            //window.addEventListener("click", myPopUp);
            //alertaIconosHobbie();
        
        }
    }
   
}


    // PARA TRANSICION AL GARGAR PAGINA AL INICIO

    function primero (){

        nombre.style.fontSize = "4em";
        nombre.style.transitionDuration = "1s";
    
        profesion.style.fontSize = "2em";
        profesion.style.transitionDuration = "1s";
    
        foto.style.height = "50%";
        foto.style.width = "50%";
        foto.style.transitionDuration = "1s"
    }

    function primeroResponsive(){

        nombre.style.fontSize = "3em";
        nombre.style.transitionDuration = "1s";
    
        profesion.style.fontSize = "2em";
        profesion.style.transitionDuration = "1s";
    
        foto.style.height = "100%";
        foto.style.width = "100%";
        foto.style.transitionDuration = "1s";

    }


 // SCROLL DE NAVBAR
function scrollNavbar(){
    var yPos = window.pageYOffset;
    var nav = document.getElementById("nav");
    
        if (yPos>0) {
            nav.style.opacity = "1";
            nav.style.transitionDuration = "1s";
            nav.style.boxShadow = "-5px -5px 45px 5px rgb(224, 113, 9)";
        } else {
            nav.style.boxShadow = "";
            nav.style.transitionDuration = "1s";
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

//SCROLL DE PARALLAX
function apareceScroll(){
    var html = document.getElementsByTagName("html")[0];
    // console.log(html)
    var elementoAparece = document.getElementsByClassName("parallax");

    var topVent = html.scrollTop;
    // console.log("topVent : "+topVent)
    for (i = 0; i < elementoAparece.length; i++) {
        var topelemAparece = elementoAparece[i].offsetTop;
        if (topVent > (topelemAparece - 700)) {
            elementoAparece[i].style.opacity = 1;
            elementoAparece[i].style.borderTop = "6px solid green";
            elementoAparece[i].style.transitionDuration = "1.5s";                
        }else{
            elementoAparece[i].style.opacity = 0;
            elementoAparece[i].style.transitionDuration = "1.5s";
        } 
    }
}

//SCROLL DE PARALLAX
function apareceScroll2(){
    // var html = document.getElementsByTagName("html")[0];
    // // console.log(html)
    // var elementoAparece = document.getElementsByClassName("parallax");

    // var topVent = html.scrollTop;
    // // console.log("topVent : "+topVent)
    // for (i = 0; i < elementoAparece.length; i++) {

    //     var topelemAparece = elementoAparece[i].offsetTop;
    //     if (topVent > (topelemAparece - 400)) {
    //         console.log(topelemAparece);
    //         elementoAparece[i].style.opacity = 1;
    //         elementoAparece[i].style.transitionDuration = "1s";                
    //     }else{
    //         elementoAparece[i].style.opacity = 0;
    //         elementoAparece[i].style.transitionDuration = "1s";
    //     } 
    // }


    var yPos = window.pageYOffset;
    console.log(yPos);
    var parallax = document.getElementsByClassName("parallax");
    //console.log(parallax[0]);
    //console.log(parallax[0].scrollTop);
 
        
        if (yPos  > 400 & yPos < 1400) {
            parallax[0].style.opacity = 1;
            parallax[0].style.transitionDuration = "1s";

        } else {
            parallax[0].style.opacity = 0;
            parallax[0].style.transitionDuration = "1s";
        }
        
        if (yPos > 2700 & yPos < 4090) {
            parallax[1].style.opacity = 1;
            parallax[1].style.transitionDuration = "1s";
        }else {
            parallax[1].style.opacity = 0;
            parallax[1].style.transitionDuration = "1s";
        }
    
    

}


// PARA CLICK HOBIE
var estado = false;
function hobie (){  
        var v = document.querySelectorAll("#popup");
          console.log(v);
        var p = document.getElementsByClassName("myPopup");
         // console.log(p);

        v.forEach(function(elem, index) {            
            elem.addEventListener("mouseover",function(){
                p[index].style.display = "inline-block";
            });
            elem.addEventListener("mouseout",function(){
                p[index].style.display = "none";
            });
          });
}

// PARA CLICK NAVBAR MOVIL
function navBar(){
        
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
}



