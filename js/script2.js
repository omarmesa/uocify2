$(document).ready(function(){

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/12047956)')
        .then(response => response.json())
        .then(data => 
            console.log(data)

            
    );



});