// Les Fonctions
// --
// Sert à répéter du code uniquement au moment ou on en a besoin

// function doSomething()
// {
//     // Instructions...
// }

// function sayHello()
// {
//     console.log("Hello There !");
// }


// sayHello();

// console.log("Un petit bout de code...");
// console.log("Un autre bout de code...");

// sayHello();

// console.log("Un gros bout de code...");
// console.log("Un autre gros bout de code...");

// sayHello();


// function ucFirst(string) 
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// let str_1 = ucFirst("ma chaine de caractères.");
// console.log( str_1 );

// let str_2 = ucFirst("hello.");
// console.log( str_2 );

// let str_3 = ucFirst("plop");
// console.log( str_3 );

// let str_4 = "plop".charAt(0).toUpperCase() + "plop".slice(1);
// console.log( str_4 );

// let str_6 = "yop";

// let str_5 = ucFirst( str_6 );
// console.log( str_5 );

// let str_7= ucFirst( str_6 + str_3 );
// console.log( str_7 );



// Fonction simple
// --

// function doSomething()
// {
//     // Instructions..
// }

// // Fonction avec paramètre(s) en entré

// function doAnotherThing(a)
// {
//     // Instructions..
// }

// function doAnAwasomeThing(a, b, c)
// {
//     // Instructions..

//     // console.log( a );
//     // console.log( b );
// }

// // doAnAwasomeThing("azerty", 42, true);


// // Fonction avec sortie de donnée

// function doJustAThing()
// {
//     // instructions...

//     return value;
// }










// function sayHello(username)
// {
//     return `Hello ${username}`;
// }

// let hello = sayHello("John");

// console.log( hello );


// function addition(p1, p2)
// {
//     let a = p1;
//     let b = p2;
//     let c = a + b;

//     return c;
// }

// let result = addition(10, 5);

// console.log( result + 10 );




// Fonctions Internes
// --

// alert("Message");

// let name = prompt("Quel est votre nom ?");
// alert( `Votre nom est ${name}` );

// let isOk = confirm("Etes vous d'accord avec le 49.3 ?");
// console.log( isOk );



// Fonctions Anonymes
// --

// let myFunction = function()
// {
//     // instructions
// }

// // myFunction();

// let btn = document.querySelector('#myBtn1');
// btn.addEventListener('click', function(){
//     // alert("Btn is clicked !");

//     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//         .then(response => response.json())
//         .then(data => console.log(data))

// });


// function sayHello()
// {
//     alert("Hello There !");
// }

// sayHello();


// let btnSayHello = document.getElementById("btnSayHello");
// btnSayHello.addEventListener('click', sayHello);





// Fonctions fléchées
// --

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then( response => response.json() )
    // .then( (response) => {response.json()} )
    .then(data => console.log(data))



let btn = document.querySelector('#myBtn1');
btn.addEventListener('click', function(event){
    // instrunctions
} );

let btn = document.querySelector('#myBtn1');
btn.addEventListener('click', event => /* instructions */);

let btn = document.querySelector('#myBtn1');
btn.addEventListener('click', (event) => {/* instructions */});

let btn = document.querySelector('#myBtn1');
btn.addEventListener('click', () => {/* instructions */});