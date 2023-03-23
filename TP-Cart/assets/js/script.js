"use strict";

/**
 * /!\ 2 errors
 */
const url = "http://127.0.0.1:5500/TP-Cart/data.json";
const catalogNode = document.querySelector("#product");
const cartProductsNode = document.querySelector("#product");
const cartAmountNode = document.querySelector("#amount");
let cart = [];

/**
 * Start the app
 * -> Get all products
 * -> Create the HTML product view
 * 
 * /!\ 1 error
 */
(async function(){
    let products = await getData();

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
 * /!\ 0 error
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
 * /!\ 6
 */
function createProductView(product)
{
    // Left Column 
    // -> Product illustration
    // --

    let imageNode = document.createElement('img');
        imageNode.alt = product.title;
        imageNode.src = product.illustration;

    let divLeftNode = document.createElement('div');
        divLeftNode.classList.add('flex-shrink-0');
        divLeftNode.append('imageNode');


    // Right Column 
    // -> Product Title
    // -> Product Description
    // -> Product Price
    // -> Add cart button
    // --

    let productTitleNode = document.createElement('h5');
        productTitleNode.innerText = product_title;

    let productDescriptionNode = document.createElement('p');
        productDescriptionNode.innerText = product.description;

    let priceNode = document.createElement('div');
        priceNode.class.add('price');
        priceNode.class.add('me-auto');
        priceNode.innerText = `${product.price} &euro;`;

    let addCartBtnNode = document.createElement('button');
        addCartBtnNode.classList.add('btn');
        addCartBtnNode.classList.add('btn-sm');
        addCartBtnNode.classList.add('btn-primary');
        addCartBtnNode.innerText = "Ajouter au panier";
        addCartBtnNode.dataset.id = product.id;
        addCartBtnNode.dataset.price = product.price;
        addCartBtnNode.addEventListener('click', addToCart);

    let priceLineNode = document.createElement('div');
        priceLineNode.classList.add('d-flex');
        priceLineNode.append(pricenode);
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
        // ...

    catalogNode.append(productNode);
}

/**
 * Add or Update product to/in cart
 * 
 * @param {Event} event 
 * 
 * /!\ 0 error
 */
function addToCart(event)
{
    const btn = event.target;
    const productId = parseInt(btn.dataset.id);
    const productPrice = parseFloat(btn.dataset.price);

    // Search product index in cart
    const productIndex = cart.findIndex(({ id }) => id === productId);

    // Add product in cart
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // Or update product in cart
    // ...
    // ...
    // ...
    // ...

    // Update cart view
    // ...
}

/**
 * Refresh view cart
 * 
 * /!\ 2 errors
 */
function refreshCartView()
{
    const cartProducts = 0;
    const cartAmount = 0;

    // Calculate cart data
    // ...
    // ...
    // ...
    // ...
    // ...

    // refresh view
    // ...
    // ...
}