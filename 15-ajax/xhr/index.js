"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');

setTimeout(function(){getPokemons()}, 10000);

function getPokemons()
{
    // console.log("Get all pokemons");


    // Instance de l'objet XHR
    const xhr = new XMLHttpRequest();


    // Preparer la requete
    xhr.open('GET', url);


    // Spy the readyState
    xhr.onreadystatechange = function()
    {
        // xhr.readyState = 0; // la requete n'est pas envoyé
        // xhr.readyState = 1; // la requete est envoyée
        // xhr.readyState = 2; // XHR à reçu l'entete de la reponse HTTP
        // xhr.readyState = 3; // XHR reçoit le contenu due la ressource 
        // xhr.readyState = 4; // la requete est terminée

        console.log( "xhr.readyState", xhr.readyState );
    }


    // Progression du chargement de la ressource
    xhr.onprogress = function(event)
    {
        console.log("document en cours de chragement...");

        if (event.lengthComputable) {
            console.log(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
            console.log(`Received ${event.loaded} bytes`); // pas de Content-Length
        }
    }


    // Execution du traitement de la reponse de la requete
    xhr.onload = function()
    {
        console.log("Code HTTP", xhr.status);

        switch (xhr.status)
        {
            case 200:
                // console.log("Success...");
                // console.log(JSON.parse(xhr.response));

                // Reponse de la requete
                const response = xhr.response;

                // Convertion json de l'objet de la reponse
                const json = JSON.parse(response);

                // Recup de la propriété "results" de l'api Pokemon
                const pokemons = json.results;

                pokemons.forEach(pokemon => {

                    const a = document.createElement('A');
                          a.innerText = pokemon.name
                          a.href = pokemon.url

                    target.append(a);
                });

            break;

            case 404:
                alert("Ooops.. ressources introuvable !");
            break;
        }
    }

    // Execution de la requete
    xhr.send();
}