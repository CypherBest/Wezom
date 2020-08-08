$(document).ready(function () {
    $(".menu-burger").click(function (event) {
      $(".menu-burger,.menu").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });
  
  $(function() {
    $( "i" ).click(function() {
      $( "i,span" ).toggleClass( "press", 1000 );
    });
  });