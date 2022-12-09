//funcion_efecto del menu
$("#iconomenu").click(function(){
    $(".contenedor_menu").slideToggle();
    });

    //ACORDEON

    $(".titulo1").click(function () {
        $(".contenido1").slideToggle();
        $(".mas1").toggleClass("desaparecer");
      });
  
      $(".titulo2").click(function () {
        $(".contenido2").slideToggle();
        $(".mas2").toggleClass("desaparecer");
      });
  
      $(".titulo3").click(function () {
        $(".contenido3").slideToggle();
        $(".mas3").toggleClass("desaparecer");
      });

      //CARRUSEL

      $(document).ready(function()
      {
          $('#carrusel').tinycarousel();
      });

      // Funcion para el boton subir
$(document).ready(function () {
    $("#subir").click(function () {
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
    });
  });