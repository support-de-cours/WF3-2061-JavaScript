// Ecrire une fonction qui retourne un objet avec le nombre de personnage 
// Masculin et le nombre de personnage Féminin

// Exemple de sortie : {male: 4, female: 3}

const users = [
    {
        name: "Eileen",
        gender: "F"
    },
    {
        name: "James",
        gender: "M"
    },
    {
        name: "John",
        gender: "M"
    },
    {
        name: "Marty",
        gender: "M"
    },
    {
        name: "Jane",
        gender: "F"
    },
    {
        name: "Leïa",
        gender: "F"
    },
    {
        name: "Luc",
        gender: "M"
    },
];

function getStats(data)
{
    // initialisation des variables de comptage
    let m = 0;
    let f = 0;

    // Boucle sur le tableau "data" (users)
    for (const user of data)
    {
        // à chaque objet (ligne) du tableau data, stockée dans la constante "user"
        // on test la propriété "user.gender"
        switch(user.gender)
        {
            // On calcul les valeur de "m" et "f" lors de chaque itération
            case "M": m++; break;
            case "F": f++; break;
        }
    }

    // Retourne le résultat des calculs de "m" et "f"
    return { m: m, f: f }
}

const stats = getStats(users);
console.log( stats );