"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');


(async function(){
    const response = await httpGet(url);
    const pokemons = response.results;
    
    pokemons.forEach(pokemon => {

        const pokemonId = getPokemonId(pokemon.url);

        const a = document.createElement('A');
              a.innerText = pokemon.name
              a.href = `pokemon.html#id=${pokemonId}`

        target.append(a);
    });

    // console.log("Fin de la fonction");
})();


function getPokemonId(url)
{
    let params = url.split("/");
        params.pop();

    return params.slice(-1);
}