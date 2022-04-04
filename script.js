$(document).ready(function(){

     $('#menu').click(function(){
         $(this).toggleClass('fa-times');
         $('.navbar').toggleClass('nav-toggle');
     });
 
     $(window).on('load scroll',function(){
         $('#menu').removeClass('fa-times');
         $('.navbar').removeClass('nav-toggle');
     });
 
 });

 const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})