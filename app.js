const menu = document.querySelector(".menuitem");
const menubtn = document.querySelector(".menuicon");
const cancel = document.querySelector(".cancelicon");

menubtn.addEventListener("click", function() {
    menu.classList.add("active");
    
})
cancel.addEventListener("click", function() {
    menu.classList.remove("active");
    
})



 $(".carousel").owlCarousel({
           margin: 20,
           loop: true,
           autoplay: true,
           autoplayTimeout: 2000,
           autoplayHoverPause: true,
           responsive: {
           0:{
           items:1,
           nav: false
           },
           600:{
           items:2,
           nav: false
           },
          1000:{
          items:1,
          nav: false
        }
     }
 });
      


//category

 /*Initialize Swiper*/
 