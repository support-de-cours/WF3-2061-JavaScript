"use strict";

async function httpGet(url)
{
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        return data;
    }
    catch(error)
    {
        // alert("Oops erreur d'api");
        return [];
    }
}