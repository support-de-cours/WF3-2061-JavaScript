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

function getStats(users)
{
    let m = 0;
    let f = 0;

    for (const user of users)
    {
        switch(user.gender)
        {
            case "M": m++; break;
            case "F": f++; break;
        }
    }

    return {
        m: m,
        f: f
    }
}

const stats = getStats(users);
console.log( stats );