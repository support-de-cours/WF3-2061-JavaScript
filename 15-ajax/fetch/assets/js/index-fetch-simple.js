"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');

// Fetch execute la requete
fetch(url)

    // Lorsque Fetch recoit la réponse de la requete
    // On stock l'objet "Response" dans l'argument "response"
    // On converti la reponse en JSON
    .then( response => response.json() )

    // Lorsque la convertion JSON est finit
    // On recupère les données de l'API dans l'argument "data"
    .then( data => {
        const pokemons = data.results;

        pokemons.forEach(pokemon => {

            const a = document.createElement('A');
                  a.innerText = pokemon.name
                  a.href = pokemon.url

            target.append(a);
        });

        console.log("Fin de fonction");
    } )

    .catch(error => {
        console.log( error.message );
    })
;


console.log("Fin du code");
