var slideIndex=1;function plusSlides(e){showDivs(slideIndex+=e)}function showDivs(e){var s,l=document.getElementsByClassName("mypics");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";l[slideIndex-1].style.display="block"}showDivs(slideIndex);