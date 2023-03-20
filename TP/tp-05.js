// Ecrire une fonction permettant de générere un mot de passe
// inspiré de : https://stackoverflow.com/questions/1497481/javascript-password-generator

// Les paramètres à prendre en entré sont:
// - Longueur du mot de passe finale (number)
// - Integration des majuscules (bool)
// - Integration des nombre de 0 à 9 (bool)
// - Integration des caractères spéciaux ($=+;.!-_§|) (bool)

// Exemple d'utilisation: 
// let password = generatePassword(16, true, true, true);
// console.log( password );

function generatePassword(length=10, uppercase=false, number=false, special=false)
{
    // Definition de la chaine de sortie
    let output = "";

    // Definition de la chaine motif
    let charset = "abcdefghijklmnopqrstuvwxyz";

    // Ajoute les majuscule
    if (uppercase)
    {
        charset+= charset.toUpperCase();
    }

    // Ajoute les nombres
    if (number)
    {
        charset+= "0123456789";
    }

    // Ajoute les caractères spéciaux
    if (special)
    {
        charset+= "$=+;.!-_§|";
    }

    // Compte le nombre de lettres de la chaine motif
    let charsetLen = charset.length;

    // Boucle sur le nombre de caractère souhaité pour le mot de passe final
    for (let i=0; i<length; i++)
    {
        // Création d'un nombre aléatoire en 0 et le nombre total de caractères de la chaine motif
        let rand = Math.floor(Math.random() * charsetLen);

        // Choix d'un caracteres dans la chaine motif
        //  et concaténation dans la variable de sortie
        output+= charset.charAt(rand);
    }

    // Sortie du mot de passe
    return output;
}


const btn = document.querySelector('#genPass');
const divPass = document.querySelector('#newPassDiv');
const inputPass = document.querySelector('[name=newPassInput]');

btn.addEventListener('click', () => {
    // Generation du MDP
    const newPwd = generatePassword(16, true, true, true);

    // Injection du MDP dans la div
    divPass.innerText = newPwd;

    // injection du MDP dans le input
    inputPass.value = newPwd;
})
