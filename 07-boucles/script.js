// Boucle FOR
// --

console.log("Boucle For");
console.log("---");

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

// for (param1 ; param2 ; param3)
// for (initialisation ; condition de bouclage ; incrementation)
for (let i = 0 ; i <= 3 ; i++)
{
    console.log( i );
}

// for (let i = 100 ; i <= 150 ; i++)
// {
//     console.log( i );
// }

let fruits_a = ["Pommes", "Poires", "Bananes", "Kiwis"];

for (let i = 0; i < fruits_a.length; i++)
{
    console.log( fruits_a[i] );
}





console.log(" ===================== ");





// Boucle WHILE
// --


console.log("Boucle While");
console.log("---");

let i = 0;

while (i <= 3)
{
    console.log( i );
    i++;
}



let fruits_b = ["Pommes", "Poires", "Bananes", "Kiwis"];

while(fruits_b.length)
{
    console.log(fruits_b[0]);
    console.log(fruits_b);

    fruits_b.shift();
    console.log("-----");
}





console.log(" ===================== ");



// Boucle DO..WHILE
// --


console.log("Boucle Do ... While");
console.log("---");

let j = 100;
do {
    console.log( j );
    j++;
} while(j < 10);