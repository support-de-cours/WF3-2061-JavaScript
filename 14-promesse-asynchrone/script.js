"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const btn = document.querySelector('#getPokemons');
const ul = document.querySelector('#pokemons');

btn.onclick = () => {

    // Fetch prommet de récupérer des données de l'"URL"
    fetch(url)

        // Lorsque fetch reçoit la réponse il execute le premier "then"
        // Ce premier "then" convertis l'objet Response en données "json"
        .then(response => response.json())

        // Lorsque les données ont été converties en "json", on execute le second "then"
        // qui récupère les données json dans la variable "data"
        .then(data => {

            const pokemons = data.results;

            for (const pokemon of pokemons)
            {
                const li = document.createElement('li');
                li.innerText = pokemon.name;

                ul.append(li);
            }
            
        })
    ;
}


async function getData()
{
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        return data.results;
    }
    catch(e)
    {
        console.warn(`Erreur sur l'api Pokemon à l'adresse ${url} - ${e}`);
        return [];
    }
}

// Fonction immediate
(async function(){

    let pokemons = await getData();
    // console.log(pokemons);

    for (const pokemon of pokemons)
    {
        const li = document.createElement('li');
        li.innerText = pokemon.name;

        ul.append(li);
    }

})();



console.log("ceci est un log");
console.warn("ceci est un warn");
console.error("ceci est un error");

let fruits = ["Pommes", "Poires", "Bananes"];
console.table( fruits );