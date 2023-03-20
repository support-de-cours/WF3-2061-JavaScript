// Ecrire un compteur de click

// -> uns balise <div id="counter">
// -> Boutton <button xxxx>Click Me</button>

const btn = document.querySelector('#btn');
const counter = document.querySelector('#counter');
let countClick = 0;

function showCounter()
{
    counter.innerHTML = countClick;
}

btn.addEventListener('click', () => {
    countClick++;
    showCounter();
});

showCounter();
