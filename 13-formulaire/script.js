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
    const isInvalid = document.querySelectorAll('.is-invalid');

    for (const item of isInvalid)
    {
        item.classList.remove('is-invalid');
    }


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
    // - required
    // - alpha chars and - only


    // Check Email
    // - required
    // - user@server.com


    // Check Password
    // - required
    // - longueur min 8 caractères
    // - longueur max 16 caractères
    // - au moins un caractère alphabetique
    // - au moins un caractère Majuscule
    // - au moins un caractère numerique
    // - au moins un caractère spécial (+=.?!-_§&@#)


    // Confirm Password
    // - doit etre identique au "password"


    // Check Birthday
    // - doit etre une date valide dans le passé
    // - age minimum 13


    // Check Terms
    // - la case doit etre cochée



    if (error)
    {
        // preventDefault arrete le comportement par défaut d'un evenement
        event.preventDefault();
    }
});
el_firstname.addEventListener('blur', checkFirstname);

