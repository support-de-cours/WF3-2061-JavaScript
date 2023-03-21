"use strict";

// Simple click
const btn_1 = document.querySelector('#btn_1');
// btn_1.addEventListener('click', (event) => {

//     // console.log( event );
//     // console.log("Simple Click");

//     // btn_1.style.backgroundColor = "red";
//     event.target.style.backgroundColor = "green";
//     event.target.style.fontSize = "2rem";

// });

btn_1.onclick = event => {
    event.target.style.backgroundColor = "green";
    event.target.style.fontSize = "2rem";
}


// Double click
const div_1 = document.querySelector('#div_1');
div_1.addEventListener('dblclick', event => {
    console.log(`Double Click sur ${event.target.id}`);
})


// Mouse Over / Mouse Out
const div_2 = document.querySelector('#div_2');

div_2.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "red";
})
div_2.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "transparent";
})



// KeyUp
// const el_firstname = document.getElementsByName('firstname');
const el_firstname = document.querySelector('[name=firstname]')
const el_firstname_log = document.querySelector('#keyUpLog');

console.log(el_firstname);

el_firstname.addEventListener('keyup', event => {

    // console.log( event.target.value );
    el_firstname_log.innerHTML = event.target.value;

})


// KeyDown
const el_lastname = document.querySelector('[name=lastname]');
const el_lastname_log = document.querySelector('#keyDownLog');

el_lastname.onkeydown = (event) => {
    el_lastname_log.innerHTML = event.target.value;
}

// KeyPress
const el_nickname = document.querySelector('[name=nickname]');
const el_nickname_log = document.querySelector('#keyPressLog');

el_nickname.onkeypress = event => {
    el_nickname_log.innerHTML = event.target.value;
}

// OnChange 1
const el_email = document.querySelector('[name=email]');
const el_email_log = document.querySelector('#onChangeLog_1');

el_email.onchange = event => {
    el_email_log.innerHTML = event.target.value;
}

// el_email.onblur = event => {
//     el_email_log.innerHTML = event.target.value;
// }




// OnChange 2
const el_gender = document.querySelector('[name=gender]');
const el_gender_log = document.querySelector('#onChangeLog_2');

el_gender.onchange = event => {
    el_gender_log.innerHTML = event.target.value;
}


// OnChange 3
const el_color = document.querySelector('[name=color]');
const el_color_log = document.querySelector('#onChangeLog_3');

el_color.onchange = event => {
    el_color_log.innerHTML = event.target.value;
}