/*
window.onscroll = function() {
    stickyNavFunction()
};
*/
window.addEventListener("scroll", stickyNavFunction)

var logo = document.getElementById("logo"),
//var main_section = document.getElementById("main_section");
    sticky = main_section.offsetTop;

function stickyNavFunction() {
    
   if ( window.pageYOffset >= sticky) {
    logo.style.backgroundImage = "url('./logo_green2.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.height = "66px";
    logo.style.width = "255px";

   } else {
    logo.style.backgroundImage = "url('./logo_green.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.height = "66px";
    logo.style.width = "255px";
   }
   
  // window.pageYOffset >= sticky ? logo.classList.add("sticky_logo") : logo.classList.remove("sticky_logo"); 

}

