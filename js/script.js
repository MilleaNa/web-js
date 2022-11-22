// Initialisation //
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $(".dropdown-trigger").dropdown({ hover: true, coverTrigger: false});  
    $('.tooltipped').tooltip();
    $('.parallax').parallax(); 
    $('.materialboxed').materialbox();
    $('.datepicker').datepicker({
      disableWeekends: true,
      yearRange: 1
    });
  });

  new WOW().init()
  
  // Carousel //
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  setInterval(function() {
   $('.carousel').carousel('next');
  }, 4000);

  
