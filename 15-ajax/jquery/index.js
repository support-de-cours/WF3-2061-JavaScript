"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');

getPokemeons()

function getPokemeons()
{
    $.ajax(url, {
        method: "GET",
        success: function(response)
        {
            const pokemons = response.results;

            pokemons.forEach(pokemon => {

                const a = document.createElement('A');
                      a.innerText = pokemon.name
                      a.href = pokemon.url

                target.append(a);
            });
        },
        error: function(event)
        {
            console.log("Error !");
            console.log(event);
        }

    });
}