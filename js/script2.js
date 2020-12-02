$(document).ready(function(){


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/12047956)')
        .then(response => response.json())
        .then((data) => {
            // Guardamos los datos que queremos mostrar
            var titulo = data.title;
            var foto = data.cover;
            var artista = data.artist.name;

            //Borramos el gif de carga
            $( "#divgif" ).remove();

            // Mostramos los datos por pantalla
            $("#album-title").html(titulo);
            $("#album-artist").html(artista);
            $("#album-cover").attr("src",foto);
        })
        .catch(function(error) {
            $( "#loading" ).remove();
            $("#error").html('Hubo un problema con la petición Fetch:' + error.message);
          });

});