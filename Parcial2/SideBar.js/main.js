$(function(){

    $("body").css({"background-color" : "darkgray"});
    $("body").css({"font-size" : "20px"});
    
    $(".contenedor").css({"width" : "90%"});
    $(".contenedor").css({"height" : "20%"});

    $(".contenedor").css({"align-items" : "center"});
    $(".contenedor").css({"border" : "solid black"});
    $(".contenedor").css({"padding" : "50px"});


    $(".contenedor").css({"background-color" : "aliceblue"});
 


    $(".content").css({"width" : "5%"});
    $(".content").css({"height" : "2%"});
    $(".content").css({"border" : "solid black"});
    $(".content").css({"background-color" : "aliceblue"});
    $(".content").css({"flex-wrap" : "wrap"});


    $("#boton2").click(function()
    { $(".contenedor").hide();}
    );

    $("#boton3").click(function()
    { $(".contenedor").show();}
    );

});
