var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);


function toggleMenu(e) {

    var divOverlay = document.getElementsByClassName("overlay")[0];
    var speed = 10;

    if( this.className == "btn-open" ) {
        fadeIn(divOverlay, speed);
        this.className = "btn-close";

    } else if ( this.className == "btn-close") {
        fadeOut(divOverlay, speed);
        this.className = "btn-open";
    }

}

function fadeIn(elem, speed) {

    var inInterval = setInterval(function(){

    elem.style.opacity = Number(elem.style.opacity) + 0.02;

    if (elem.style.opacity >= 1) {

        elem.style.opacity = 1;
        clearInterval(inInterval);

    }


    }, speed);

}

function fadeOut(elem, speed) {

    var outInterval = setInterval(function(){

    elem.style.opacity = Number(elem.style.opacity) - 0.02;

    if (elem.style.opacity <= 0) {

        elem.style.opacity = 0;
        clearInterval(outInterval);

    }


    }, speed); // 10ms == .01s



}
