// Boucle FOR
// --

// console.log("Boucle For");
// console.log("---");

// // console.log(0);
// // console.log(1);
// // console.log(2);
// // console.log(3);

// // for (param1 ; param2 ; param3)
// // for (initialisation ; condition de bouclage ; incrementation)
// for (let i = 0 ; i <= 3 ; i++)
// {
//     console.log( i );
// }

// // for (let i = 100 ; i <= 150 ; i++)
// // {
// //     console.log( i );
// // }

// let fruits_a = ["Pommes", "Poires", "Bananes", "Kiwis"];

// for (let i = 0; i < fruits_a.length; i++)
// {
//     console.log( fruits_a[i] );
// }





// console.log(" ===================== ");





// // Boucle WHILE
// // --


// console.log("Boucle While");
// console.log("---");

// let i = 0;

// while (i <= 3)
// {
//     console.log( i );
//     i++;
// }



// let fruits_b = ["Pommes", "Poires", "Bananes", "Kiwis"];

// while(fruits_b.length)
// {
//     console.log(fruits_b[0]);
//     console.log(fruits_b);

//     fruits_b.shift();
//     console.log("-----");
// }





// console.log(" ===================== ");



// // Boucle DO..WHILE
// // --


// console.log("Boucle Do ... While");
// console.log("---");

// let j = 100;
// do {
//     console.log( j );
//     j++;
// } while(j < 10);




// forEach & map

// let fruits = ["Pommes", "Poires", "Bananes", "Kiwis"];

// for (let i=0; i < fruits.length; i++)
// {
//     console.log( `${(i+1)} - ${fruits[i]}` );
// }

// list.forEach( line => console.log(line) );
// fruits.forEach( fruit => console.log(fruit) );

// fruits.map( fruit => console.log(fruit) );


// For in
// --


const user = {
    firstname: "Bruce",
    lastname: "WAYNE",
    'super-power': "de la thunas"
};

// for (const key in user) 
// {
//     // console.log( key );
//     console.log( user[key] );
// }

// console.log( user['super-power'] );

let fruits = ["Pommes", "Poires", "Bananes", "Kiwis"];

for (const fruit of fruits)
{
    console.log( fruit );
}

