window.onscroll = function () {myFunction()};
var navbar = document.getElementById("navbar-search");

var mainhtm = document.getElementById("main");
var sticky = navbar.offsetTop;

function myFunction() {

if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    mainhtm.classList.add("magin");
    } 
    else {
    navbar.classList.remove("sticky");
    mainhtm.classList.remove("magin");
  }
}


