const urlParams = getParamsFromUrl();
const id = urlParams.id;

const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

const nameNode = document.getElementById('name');
const artworkNode = document.getElementById('artwork');

(async function(){
    const pokemon = await httpGet(url);

    const artwork = pokemon.sprites.other['official-artwork'].front_default;

    nameNode.innerText = pokemon.name;
    artworkNode.src = artwork;
})();

function getParamsFromUrl()
{
    let output = {};

    let hash = window.location.hash;    // #id=1&param=value
        hash = hash.substring(1);       // id=1&param=value
    const params = hash.split('&');     // ['id=1', param=value]

    params.forEach(param => {
        param = param.split('=');   // ['id', '1']

        // output.id = 1
        output[ param[0] ] = param[1];
    });

    return output;
}