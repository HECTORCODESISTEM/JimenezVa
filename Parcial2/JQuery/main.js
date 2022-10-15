$(function(){

    $("#primero").css({"background-color" : "red"});

    $("#boton4").click(function()
    { $(".texto").fadeOut(); 
    alert("No nos queremos ir señor programador");
    alert("Esto que has echo no tiene remedio :("); }
    
    );




// Botones Atributos
    $("#boton1").click(function()
    { alert("Hola");}
    );

    $("#boton2").click(function()
    { $("#segundo").hide();}
    );

    $("#boton3").click(function()
    { $("#segundo").show();}
    );
// Flex box atributos
    $(".contenedor").mouseenter(function()
    { $("#broma").hide(); }
    
    );

    $(".contenedor").mouseleave(function()
    { $("#broma").show();}
    );



})