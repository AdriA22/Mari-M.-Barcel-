jQuery(function(){

    $("#mostrarSobreMi").on("click", function(){

        if ($("#SobreMi").is(":visible")){
            $("#SobreMi").hide();
            $("#mostrarSobreMi").text("Sobre mi");            
        } else {
            $("#SobreMi").show();
            $("#mostrarSobreMi").text("Cerrar");
        }
    })
})