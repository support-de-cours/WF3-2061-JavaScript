const users = [
    // 0
    {
        firstname: "John",
        lastname: "DOE",
        age: 15
    },

    // 1
    {
        firstname: "Bruce",
        lastname: "WAYNE",
        age: 80
    },

    // 2
    {
        firstname: "John",
        lastname: "McLane",
        age: 60
    },
];

// Affiche les nom et prenom des utilisateurs ayant plus de 21 ans

// - Bruce WAYNE
// - John McLane

console.log( users.length );

for (let i=0; i < users.length; i++)
{
    if (users[i].age >= 21)
    {
        console.log( `${users[i].firstname} ${users[i].lastname}` );
    }
}