// Initialisation //
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $(".dropdown-trigger").dropdown({ hover: true, coverTrigger: false});  
    $('.tooltipped').tooltip();
    $('.parallax').parallax(); 
    $('.modal').modal();
    $('#textarea1').val('New Text');
      M.textareaAutoResize($('#textarea1'));
    $('.materialboxed').materialbox();
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

  
