"use strict";

const maPromesse = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve('toto');
    }, 300);

});
  
maPromesse
    .then(gestionnaireSuccesA, gestionnaireEchecA)
    .then(gestionnaireSuccesB, gestionnaireEchecB);


function gestionnaireSuccesA(data) {
    console.log("Succes A " + data);
}
function gestionnaireEchecA(data) {
    console.log("Echec A " + data);
}

function gestionnaireSuccesB(data) {
    console.log("Succes B " + data);
}
function gestionnaireEchecB(data) {
    console.log("Echec B " + data);
}

function test()
{
    return "My test";
}


console.log(test());