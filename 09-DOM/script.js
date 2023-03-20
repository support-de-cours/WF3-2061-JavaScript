"use strict";

// Selecteurs GET
// --

// Selecteur d'ID
const elId = document.getElementById('myId');
console.log( elId );

// Selecteur de classes
const elClass = document.getElementsByClassName('myClass')
console.log( elClass );

// Selecteur de type
const elType = document.getElementsByTagName('span');
console.log( elType );

// Selecteur de nom
const elName = document.getElementsByName('firstname');
console.log( elName );


// Selecteurs "Query"
// --

// Sélecteur d'ID
const elId2 = document.querySelector('#myId');
console.log( elId2 );

// Selecteur de classe
const elClass2 = document.querySelector('.myClass');
console.log( elClass2 );

const elClass3 = document.querySelectorAll('.myClass');
console.log( elClass3 );

// Selecteur de type
const elType2 = document.querySelector('span');
console.log( elType2 );

// Selecteur d'attribut
const elAttr = document.querySelector('[data-price]');
console.log( elAttr );