"use strict";

// Indiquer les champs obligatoires
// --

//#region requiredFields

// 1. Cibler tous les éléments qui possède l'attribut "required"
// 2. remoter sur son élément parent
// 3. Cibler l'élément frere "label"
// 4. Injecter la class "required" sur l'element "label"

// Etape 1
// --
const arr_required = document.querySelectorAll('[required]');

// Etape 2
// --
for (const item of arr_required)
{
    let parent;
    let label;

    // Etape 3.a
    if (item.nodeName === 'INPUT')
    {
        parent = item.parentNode;
    }
    else if (item.nodeName === 'SELECT')
    {
        parent = item.parentNode.parentNode.parentNode;
    }

    // Etape 3.b
    if (parent.nodeName === 'DIV')
    {
        label = parent.querySelector('label');
    }
    else
    {
        label = parent;
    }

    // Etape 4
    label.classList.add('required');
}

//#endregion requiredFields


// Générer les listes de selections du champ "Birthday"
// --

//#region selectFields

const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
];

// Liste des jours
const select_day = document.querySelector('[name="birthday[day]"]');

for (let i=1; i<=31; i++)
{
    let el_option = document.createElement('option');
        el_option.value = i;
        el_option.innerText = i<=9 ? `0${i}` : i;

    select_day.append( el_option );
}


// Liste des mois
const select_month = document.querySelector('[name="birthday[month]"]');

for (let i=0; i<months.length; i++)
{
    let el_option = document.createElement('option');
        el_option.value = (i+1);
        el_option.innerText = months[i];

    select_month.append( el_option );
}


// Liste des années
const select_year = document.querySelector('[name="birthday[year]"]');

const date = new Date();
const year = date.getFullYear();
const minYear = year-100;

for (let i=year; i>=minYear; i--)
{
    let el_option = document.createElement('option');
        el_option.innerText = i;

    select_year.append( el_option );
}

//#endregion selectFields



// Controle du formulaire
// --

const form = document.querySelector('form');
const el_firstname = document.querySelector('input[name=firstname]');
const el_lastname = document.querySelector('input[name=lastname]');
const el_email = document.querySelector('input[name=email]');
const el_password = document.querySelector('input[name=password]');
const el_confirm_password = document.querySelector('input[name=confirmpwd]');
const el_agreeTerms = document.querySelector('input[name=agreeTerms]');


/**
 * Show an error message
 * 
 * @param {ElementNode} target 
 * @param {string} message 
 * @return void
 */
function showError(target, message)
{
    let el_error = document.createElement('div');
        el_error.classList.add('error');
        el_error.innerText = message;

    target.classList.add('is-invalid');
    target.parentNode.append(el_error);
}

/**
 * Remove all error message
 * 
 * @return void
 */
function removeError()
{
    console.log('REMOVE IS-INVALID');
    const isInvalid = document.querySelectorAll('.is-invalid');

    for (const item of isInvalid)
    {
        item.classList.remove('is-invalid');
    }


    console.log('REMOVE ERROR');
    const errors = document.querySelectorAll('.error');

    for (const item of errors)
    {
        item.remove();
    }
}

/**
 * Check the firstname constraints
 * 
 * @returns {bool} true if firstname is valid
 */
function checkFirstname()
{
    // Check firstname
    let firstname = el_firstname.value;
    let error = false;

    // firstname is required
    if (!firstname.length)
    {
        showError(el_firstname, "Le champ firstname est obligatoire !!");
        error = true;
    }
    else if (!/^[a-z][a-z-]*[a-z]?$/i.test(firstname))
    {
        showError(el_firstname, "Le prenom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }

    return error;
}

/**
 * Check the lastname constraints
 * 
 * @returns {bool} true if firstname is valid
 */
function checkLastname()
{
    // Check lastname
    let lastname = el_lastname.value;
    let error = false;
    // let re = /^[a-z][a-z-\s]*[a-z]?$/i;
    let re = new RegExp(/^[a-z][a-z-\s]*[a-z]?$/, "i");

    // lastname is required
    if (!lastname.length)
    {
        showError(el_lastname, "Le champ lastname est obligatoire !!");
        error = true;
    }
    else if (!re.test(lastname))
    {
        showError(el_lastname, "Le Nom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }

    return error;
}

function checkEmail()
{
    let email = el_email.value;
    let error = false;
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.length)
    {
        showError(el_email, "Le champ email est obligatoire !!");
        error = true;
    }
    else if (!re.test(email))
    {
        showError(el_email, "L'adresse email n'est pas valide !");
        error = true;
    }

    return error;
}

function checkPassword()
{
    let password = el_password.value;
    let error = false;
    let minChar = 8;
    let maxChar = 16;
    let specialChar = "+=!-_§";
    let re_specialChar = new RegExp(`/[${specialChar}]/`, "g");

    // - required
    if (!password.length)
    {
        showError(el_password, "Le champ password est obligatoire !!");
        error = true;
    }

    // - longueur min 8 caractères
    else if (password.length < minChar)
    {
        showError(el_password, `Le champ password doit contenir minimum ${minChar} caractères !!`);
        error = true;
    }

    // - longueur max 16 caractères
    else if (password.length > maxChar)
    {
        showError(el_password, `Le champ password doit contenir maximum ${maxChar} caractères !!`);
        error = true;
    }

    // - au moins un caractère alphabetique
    else if (!/[a-z]/.test(password))
    {
        showError(el_password, `Le champ password doit contenir au moins un caractère alphabétique !!`);
        error = true;
    }

    // - au moins un caractère Majuscule
    else if (!/[A-Z]/.test(password))
    {
        showError(el_password, `Le champ password doit contenir au moins un caractère alphabétique majuscule !!`);
        error = true;
    }

    // - au moins un caractère numerique
    else if (!/[0-9]/.test(password))
    {
        showError(el_password, `Le champ password doit contenir au moins un caractère numérique !!`);
        error = true;
    }

    // - au moins un caractère spécial (+=.?!-_§&@#)
    // else if (!re_specialChar.test(password))
    // {
    //     showError(el_password, `Le champ password doit contenir au moins un caractère spécial (${specialChar}) !!`);
    //     error = true;
    // }


    return error;
}

function confirmPassword()
{
    let password = el_password.value;
    let confirmation = el_confirm_password.value;
    let error = false;

    if (confirmation !== password)
    {
        showError(el_confirm_password, `Les mots de passe doivent être identique !`);
        error = true;
    }

    return error;
}

function checkTerms()
{
    let agreeTerms = el_agreeTerms.checked;
    let error = false;

    if (!agreeTerms)
    {
        showError(el_agreeTerms, `Vous devez accepter les CGU !`);
        error = true;
    }
    
    return false;
}



form.addEventListener('submit', event => {
    
    // On considère que le formulaire n'à pas d'erreur
    let error = false;

    removeError();

    // Check firstname
    if (checkFirstname())
    {
        error = true;
    }
    
    // Check Lastname
    if (checkLastname())
    {
        error = true;
    }

    // Check Email
    if (checkEmail())
    {
        error = true;
    }

    // Check Password
    if (checkPassword())
    {
        error = true;
    }

    // Confirm Password
    if (confirmPassword())
    {
        error = true;
    }


    // Check Birthday
    // - doit etre une date valide dans le passé
    // - age minimum 13


    // Check Terms
    if (checkTerms())
    {
        error = true;
    }



    if (error)
    {
        // preventDefault arrete le comportement par défaut d'un evenement
        event.preventDefault();
    }
});

el_firstname.addEventListener('blur', checkFirstname);
el_lastname.addEventListener('blur', checkLastname);
el_email.addEventListener('blur', checkEmail);
el_password.addEventListener('blur', checkPassword);
el_confirm_password.addEventListener('blur', confirmPassword);
