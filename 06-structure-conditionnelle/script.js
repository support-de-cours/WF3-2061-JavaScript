// Structure IF
// --
console.log("Structure IF");
console.log("-----");

let a = true;

if ( a )
{
    console.log("La valeur de A est Vrai !");
}

console.log("Suite du code");


let b = true;
let c = true;

if ( b && c ) 
{
    console.log("B et C sont vraie");
}



let d = false;

if (!d)
{
    console.log("D est Faux");
}



console.log( " =================== " );



// Structure IF ... ELSE
// --

console.log("Structure IF ... ELSE ");
console.log("-----");

let e = false;

if ( e )
{
    console.log("E est Vrai");
}
else 
{
    console.log("E n'est pas Vrai");
}



console.log( " =================== " );








// Structure IF ... ELSE IF
// --

console.log("Structure IF ... ELSE IF ");
console.log("-----");

let f = false;
let g = true;
let h = true;


if ( f )
{
    console.log("F est Vrai");
}
else if ( g )
{
    console.log("G est Vrai");
}
else if ( h )
{
    console.log("H est Vrai");
}

console.log("Suite du code");

console.log( " =================== " );







// Structure IF ... ELSE IF ... ELSE
// --


console.log("Structure IF ... ELSE IF ");
console.log("-----");

let i = false;
let j = false;
let k = false;


if ( i )
{
    console.log("I est Vrai");
}
else if ( j )
{
    console.log("j est Vrai");
}
else if ( k )
{
    console.log("k est Vrai");
}
else {
    console.log("I, J et K ne sont pas Vrai");
}

console.log("Suite du code");

console.log( " =================== " );



let trafficLight = "green";


if (trafficLight == "green")
{
    console.log("On passe.");
}
else if (trafficLight == "orange")
{
    console.log("On s'arrete.");
}
else if (trafficLight == "red")
{
    console.log("On stop.");
}
else {
    console.log("C'est la merde");
}

console.log( " =================== " );







// Structure Switch (commutateur)
// --


console.log("Structure Switch ");
console.log("-----");


switch (trafficLight)
{
    case 'green':
        console.log("On passe.");
    break;

    case 'orange':
        console.log("On s'arrete.");
    break;

    case 'red':
        console.log("On stop.");
    break;

    default:
        console.log("C'est la merde.");
}
console.log( " =================== " );









// Opérateur ternaire
// --


console.log("Opérateur Ternaire ");
console.log("-----");


// let l = 42;
// let m; // plus grand ou egale | plus petit

// if ( l >= 50 )
// {
//     m = "plus grand ou egale";
// }
// else 
// {
//     m = "plus petit";
// }


// (operande condition) ? operande si condition est Vraie : opérande si condition est Faux

// let l = 42;
// let m = (l >= 50) ? "plus grand ou egale" : "plus petit";
// console.log( m );



let age = 14;
let isAdult = age >= 18 ? true : false;

// let isAdult;
// if (age >= 18) {
//     isAdult = true;
// }
// else 
// {
//     isAdult = false;
// }


if (isAdult)
{
    console.log("Je suis Adulte");
}
else
{
    console.log("Je ne suis pa Adulte");
}