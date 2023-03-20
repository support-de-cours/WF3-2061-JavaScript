"use strict";

const div_1 = document.getElementById('div_1');

// Css
div_1.style.color = "red";
div_1.style.backgroundColor = "yellow";

// Création d'un element
const div_2 = document.createElement('div');

div_2.id = "div_2";
// div_2.textContent = "John DOE";
// div_2.innerText = "Hello <strong>There</strong> !";
div_2.innerHTML = "Hello <strong>There</strong> !";


div_1.append(div_2);