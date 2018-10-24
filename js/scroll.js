//SCROLL DE PARALLAX
function apareceScroll(){
    var html = document.getElementsByTagName("html")[0];
    console.log(html)
    var elementoAparece = document.getElementsByClassName("parallax");
    
    // console.log("elementoAparece : "+elementoAparece);
    

    document.addEventListener("wheel", function(){
        var topVent = html.scrollTop;
        // console.log("topVent : "+topVent)
        for (i = 0; i < elementoAparece.length; i++) {
            var topelemAparece = elementoAparece[i].offsetTop;
            // console.log("topelemAparece : "+topelemAparece)
            if (topVent > (topelemAparece - 400)) {
                elementoAparece[i].style.opacity = 1;
                elementoAparece[i].style.borderTop = "6px solid green";
                elementoAparece[i].style.transitionDuration = "1.5s";
                
                // console.log("elementoAparece[i].style.opacity : "+elementoAparece[i].style.opacity)
            }else{
                elementoAparece[i].style.opacity = 0;
                elementoAparece[i].style.transitionDuration = "1.5s";
            }
            
        }
    })
}

window.addEventListener("scroll", apareceScroll);


