$(document).ready(function(){
    
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/12047956)')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            var titulo = data.title;
            var foto = data.cover;
            var artista = data.artist.name;

            
            $("#album-title").html(titulo);
            $("#album-artist").html(artista);
            $("#album-cover").attr("src",foto);
        })

});