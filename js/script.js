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

  // cursor egg
  function myFunction() {
  
    
    var active = 1;

    var w = window.innerWidth;
    var h = window.innerHeight;
    var eggs = [];
    var eggWidth = 75;
    var eggHeight = 102;
    var max = 90;
    var mouse = {
      x: null,
      y: null
    }
    var eggImages = [
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/gold-easter-egg.png',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/purple-easter-egg.png',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/pink-easter-egg.png',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/blue-easter-egg.png'
    ];
    
    var text;
    
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    var eggs = [];
    var eggWidth = 75;
    var eggHeight = 102;
    var max = 90;
    var mouse = {
      x: null,
      y: null };
    
    var eggImages = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/gold-easter-egg.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/purple-easter-egg.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/pink-easter-egg.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/blue-easter-egg.png'];
    
    
    var text;
    
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var stage = new PIXI.Container();
    
    var renderer = PIXI.autoDetectRenderer(w, h, {
      transparent: true });
    
    
    document.body.appendChild(renderer.view);
    
    
    function setup() {
  
    
      for (var i = 0; i < max; i++) {
        (function (j) {
          setTimeout(function () {
            var texture = PIXI.Texture.fromImage(eggImages[random(0, eggImages.length)]);
    
            var egg = new PIXI.Sprite(texture);
            egg.anchor.x = 0.5;
            egg.anchor.y = 0.5;
            setEgg(egg);
            eggs.push(egg);
            stage.addChild(egg);
    
          }, j * 80);
        })(i);
    
      }
    }
    
    function setEgg(egg) {
      egg.position.x = mouse.x ? mouse.x : w / 2;
      egg.position.y = mouse.y ? mouse.y : h / 2;
      egg.vr = Math.random() > .5 ? Math.random() * -.01 : Math.random() * .01;
      egg.vx = random(-2, 2);
      egg.vy = random(-2, 2);
      var scale = random(5, 9) * .1;
      egg.scale.x = scale;
      egg.scale.y = scale;
      egg.inView = false;
      egg.life = 0;
      egg.maxLife = random(50, 100);
    }
    
    
    function touches(e) {
      mouse.x = e.touches ? e.touches[0].clientX : e.clientX;
      mouse.y = e.touches ? e.touches[0].clientY : e.clientY;
    }
    
    window.addEventListener("mousemove", touches);
    window.addEventListener("touchstart", touches);
    window.addEventListener("touchmove", touches);
    window.addEventListener("mouseout", noMouse);
    
    function noMouse() {
      mouse.x = mouse.y = null;
    }
    
    function animate() {
      for (var i in eggs) {
        var e = eggs[i];
        e.position.y += e.vy;
        e.position.x += e.vx;
        e.rotation += e.vr;
        e.vy += .01;
        e.scale.x *= .98;
        e.scale.y *= .98;
        e.life++;
        if (e.position.x + eggWidth / 2 < 0 ||
        e.position.x - eggWidth / 2 > w ||
        e.position.y + eggHeight / 2 < 0 ||
        e.position.y - eggHeight / 2 > h ||
        e.life > e.maxLife) {
          if (e.inView) {
            setEgg(e);
          }
        } else {
          e.inView = true;
        }
      }
      renderer.render(stage);
      requestAnimationFrame(animate);
    }
    
    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      renderer.resize(w, h);
    }
    
    window.addEventListener("resize", resize);
    
    setup();
    animate();

    $(document).ready(function(){
      $("canvas").css("position","fixed");
      $("canvas").css("top","0");
      $("canvas").css("left","0");
      $("canvas").css("z-index","9999");
      $("canvas").css("width","100%");
      $("canvas").css("height","100%");
    });

    setTimeout(() => {
      // Sortir de ta fonction
      location.reload();
    }, 5000);
  }

  //Dark mode
  function darkmode() {
    $("body").toggleClass("dark-mode");
    $(".card").toggleClass("dark-mode");
    $("#icon_darkmode").html("sunny");
  }
