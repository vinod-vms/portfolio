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

    var x = window.matchMedia("(max-width: 768px)");
    
   if (x.matches) {
   if ( window.pageYOffset <= sticky) {
    logo.style.backgroundImage = "url('./logo_green.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.height = "44px";
    logo.style.width = "171px";

   } else if (window.pageYOffset >= sticky) {
    logo.style.backgroundImage = "url('./logo_green2.svg')";
    logo.style.backgroundSize = "contain";
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.height = "44px";
    logo.style.width = "171px";
   }
}
   else{
    if ( window.pageYOffset <= sticky) {
        logo.style.backgroundImage = "url('./logo_green.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "66px";
        logo.style.width = "255px";
    
       } else if (( window.pageYOffset >= sticky)) {
        logo.style.backgroundImage = "url('./logo_green2.svg')";
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
        logo.style.height = "66px";
        logo.style.width = "255px";
       }
   }
  // window.pageYOffset >= sticky ? logo.classList.add("sticky_logo") : logo.classList.remove("sticky_logo"); 

}

