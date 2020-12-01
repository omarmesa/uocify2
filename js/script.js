$(document).ready(function(){

    // comprobamos siempre despues de cargar la pagina
    if (window.location.href.indexOf("?buscador=") > -1) {

        var url = window.location.href;
        var parametro = url.split("=")[1];
        var parametro2 = parametro.replace(/[+]/g,' ')
        $("#resultado").html(parametro2);

    }

    // validamos que el formulario no este en blanco
    $("#formulario").submit(function( event ) {

        var buscador = $('#buscador').val()
    
        if(buscador == "" || buscador.indexOf(" ") == 0){
            return false;
        }
        
        return true;
        
      });

  });