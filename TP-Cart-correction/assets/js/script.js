"use strict";

/**
 * /!\ 2 errors
 * 
 * Error 1 : const catalogNode = document.querySelector("#products-list");
 * Error 2 : const cartProductsNode = document.querySelector("#product");
 */
const url = "http://127.0.0.1:5500/TP-Cart-correction/data.json";
const catalogNode = document.querySelector("#catalog"); // 👍
const cartProductsNode = document.querySelector("#products"); // 👍
const cartAmountNode = document.querySelector("#amount");
let cart = [];
// let cart = [
//     {
//         id: 2,
//         price: 0.77,
//         quantity: 2
//     }
// ];



/**
 * Start the app
 * -> Get all products
 * -> Create the HTML product view
 * 
 * /!\ 1 error
 * Error 1 : let products = await getData();
 *      La méthode "getData" attend l'argument "url", il faut hydrater cet 
 *      argument lors de l'appel de "getData".
 */
(async function(){
    let products = await getData(url); // 👍
    
    for (const product of products)
    {
        createProductView(product);
    }
})();

/**
 * Get and return some data
 * 
 * @param {string} url 
 * @returns 
 * 
 * /!\ 0 error !!
 */
async function getData(url)
{
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        return data;
    }
    catch(e)
    {
        return [];
    }
}

/**
 * Create the HTML DOM of product
 * 
 * @param {Object} product 
 * 
 * /!\ 6 errors
 * /!\ 3 tasks
 */
function createProductView(product)
{
    // Left Column 
    // -> Product illustration
    // --

    let imageNode = document.createElement('img');
        imageNode.alt = product.title;
        // Task 1 : Ajouter l'attribut "src"
        imageNode.src = product.illustration;

    // error(s) !
    let divLeftNode = document.createElement('div');
        divLeftNode.classList.add('flex-shrink-0');
        // Error 1 : divLeftNode.append('imageNode');
        //      "imageNode" ne doit pas être passé comme une chaine de caractères
        divLeftNode.append(imageNode); // 👍


    // Right Column 
    // -> Product Title
    // -> Product Description
    // -> Product Price
    // -> Add cart button
    // --

    // error(s) !
    let productTitleNode = document.createElement('h5');
        // Error 2 : productTitleNode.innerText = product_title;
        //      la variable "product_title" n'existe pas.
        //      "product" est un objet qui contient la propriété "title"
        productTitleNode.innerText = product.title; // 👍

    let productDescriptionNode = document.createElement('p');
        // Task 2 : Ajouter le texte de la description
        productDescriptionNode.innerText = product.description;

    // error(s) !
    let priceNode = document.createElement('div');
        // Error 3 : priceNode.class.add('price'); et priceNode.class.add('me-auto');
        //      La propriété "class" n'existe pas
        //      Utiliser la propriété classList pour lire la liste des class d'un element HTML
        priceNode.classList.add('price'); // 👍
        priceNode.classList.add('me-auto'); // 👍
        // Error 3 : priceNode.innerText = `${product.price} &euro;`;
        //      Mauvaise utilisation de "innerText".
        //      La chaine de caractères contient une entité HTML " &euro;" qui 
        //      doit etre interprété par "innerHTML"
        priceNode.innerHTML = `${product.price} &euro;`; // 👍

    let addCartBtnNode = document.createElement('button');
        addCartBtnNode.classList.add('btn');
        addCartBtnNode.classList.add('btn-sm');
        addCartBtnNode.classList.add('btn-primary');
        addCartBtnNode.innerText = "Ajouter au panier";
        addCartBtnNode.dataset.id = product.id;
        addCartBtnNode.dataset.price = product.price;
        addCartBtnNode.addEventListener('click', addToCart);

    // error(s) !
    let priceLineNode = document.createElement('div');
        priceLineNode.classList.add('d-flex');
        // Error 5 : priceLineNode.append(pricenode);
        //      Ile manque une majuscule àla référénce de la variable "pricenode"
        priceLineNode.append(priceNode); // 👍
        priceLineNode.append(addCartBtnNode);

    let divRightNode = document.createElement('div');
        divRightNode.classList.add('flex-grow-1');
        divRightNode.classList.add('ms-3');
        divRightNode.append(productTitleNode);
        divRightNode.append(productDescriptionNode);
        divRightNode.append(priceLineNode);


    // Product container
    // --

    let productNode = document.createElement('div');
        productNode.classList.add('product');
        productNode.append(divLeftNode);
        // Task 3 : Injecter le noeud "divRightNode" dans le noeud "productNode"
        //      le noeud "divRightNode" contient l'affichage des informations 
        //      du produit
        productNode.append(divRightNode);

    catalogNode.append(productNode);
}

/**
 * Add or Update product to/in cart
 * 
 * @param {Event} event 
 * 
 * /!\ 0 error
 * /!\ 2 tasks
 */
function addToCart(event)
{
    const btn = event.target;
    const productId = parseInt(btn.dataset.id);
    const productPrice = parseFloat(btn.dataset.price);

    // Search product index in cart
    const productIndex = cart.findIndex(({ id }) => id === productId);

    // Task 1.a
    // Add product in cart
    if (productIndex < 0)
    {
        cart.push({
            id: productId,
            price: productPrice,
            quantity: 1
        });
    }

    // Task 1.b
    // Or update product in cart
    else
    {
        cart[productIndex].quantity++;
    }


    // Task 2 : Appel de la fonction de mise à jour de l'affichage du panier
    // Update cart view
    refreshCartView();
}

/**
 * Refresh view cart
 * 
 * /!\ 2 errors
 * /!\ 2 tasks
 */
function refreshCartView()
{
    // Error 1 & 2 : Les constantes ne pourront pas changer de valeur
    //      Les variables "cartProducts" et "cartAmount" servent à stocker:
    //      - Le nombre de produit du panier
    //      - Le montant total du panier
    // const cartProducts = 0;
    // const cartAmount = 0;
    let cartProducts = 0; // 👍
    let cartAmount = 0; // 👍


    // Task 1 : Calcul du nombre de produits et du montant total
    // Calculate cart data
    for (const product of cart)
    {
        console.log( product );
        // Pour chaque produit du panier, on additionne les quantités
        cartProducts+= product.quantity;
        
        // Pour chaque produit du panier, on calcul le sous total (quantité x prix), 
        // et on addition le résultat
        cartAmount+= product.quantity * product.price;
    }

    // Fixe à 2 chiffre aprés la virgule
    // 1.9 devient 1.90
    cartAmount = cartAmount.toFixed(2);

    // refresh view
    // Task 2 : On met à jour l'affichage du panier
    cartProductsNode.innerText = cartProducts;
    cartAmountNode.innerText = cartAmount;
}