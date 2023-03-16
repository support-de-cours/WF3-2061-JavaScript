// Chaine de caractères (string)
// --


// let str_1 = "Ceci est une chaine de caractères.";
// console.log( str_1 );
// console.log( typeof str_1 );


// let str_2 = 'Ceci est une autre chaine de caractères.';
// console.log( str_2 );
// console.log( typeof str_2 );


// let str_3 = 'Aujourd\'hui, il fait beau';
// console.log( str_3 );
// console.log( typeof str_3 );


// let str_4 = `Ceci est une autre chaine de caractères`;
// console.log( str_4 );
// console.log( typeof str_4 );



// Concaténation de chaine
// let firstname = "John";

// console.log( "Bonjour "+firstname );
// console.log( "Bonjour ".concat(firstname) );
// console.log( `Bonjour ${firstname}` );




// Les Nombres (numbers)
// --

// let num_1 = 42;
// console.log( num_1 );
// console.log( typeof num_1 );

// // num_2 n'est pas un nombre
// let num_2 = "42";
// console.log( num_2 );
// console.log( typeof num_2 );


// let num_3 = 21.5;
// console.log( num_3 );
// console.log( typeof num_3 );


// let num_4 = -45;
// console.log( num_4 );
// console.log( typeof num_4 );


// let num_5 = 0;
// console.log( num_5 );
// console.log( typeof num_5 );


// let num_6 = "AZERTY" + 5;
// console.log( num_6 );
// console.log( typeof num_6 );


// let num_7 = 12 + "AZERTY";
// console.log( num_7 );
// console.log( typeof num_7 );


// let num_8 = 12 + "10";
// console.log( num_8 );
// console.log( typeof num_8 );


// let num_9 = "10" + 12;
// console.log( num_9 );
// console.log( typeof num_9 );


// let num_10 = "abc" * 10;
// console.log( num_10 );
// console.log( typeof num_10 );



// Les Booléens (booleans / bool)
// --

// let bool_1 =  true;
// console.log( bool_1 );
// console.log( typeof bool_1 );

// let bool_2 =  false;
// console.log( bool_2 );
// console.log( typeof bool_2 );



// Les tableaux (Array)
// --

// // A l'ancienne
// let arr_1 = new Array();
// console.log( arr_1 );
// console.log( arr_1.length );
// // // console.log( typeof arr_1 );

// let arr_2 = [];
// console.log( arr_2 );
// console.log( arr_2.length );
// console.log( typeof arr_2 );


// let arr_3 = ['Pommes', 'Poires', 'Bananes', 'Kiwis', 'Fraises'];
// // console.log( arr_3 );
// // console.log( arr_3.length );

// console.log( arr_3[2] );

// let arr_4 = [0,1,2,3,4,5,6,7,8,9];
// arr_4.push('Pommes');
// console.log( arr_4 );
// console.log( arr_4.length );

// let arr_5 = new Array(10);
// arr_5.push('Poires');
// console.log( arr_5 );
// console.log( arr_5.length );

// console.log( `J'aime les ${arr_3[4]}` );
// J'aime les Fraises




// Les Objects (objects)
// --

// let obj_1 = new Object();
// console.log( obj_1 );
// console.log( typeof obj_1 );

// let obj_2 = {};
// console.log( obj_2 );
// console.log( typeof obj_2 );

// let arr_1 = [
//     'DOE',  // 0
//     'John', // 1
//     25      // 2
// ];


// let user = {
//     firstname: "BOB",
//     lastname: "DOE",
//     age: 28
// };

// console.log( arr_1[1] );
// console.log( user.firstname );


let obj_3 = {
    string: "azerty",
    number: 42,
    bool: true,
    object: {},
    array: [],
    fnc: function(){}
};

console.log( obj_3 );
