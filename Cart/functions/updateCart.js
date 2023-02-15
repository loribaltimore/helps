let axios = require('axios');
const { ConnectionStates } = require('mongoose');
let updateSession = require('../../functions/updateSession');
let {createCart, CartItem} = require('./createCart.js');

module.exports.addToCart = async (currentUser, cart, item, coin) => {
    let { name, price, img, code, config} = item;

    if (cart === undefined) {
        cart = await createCart(currentUser, item, coin).then(data => { return data }).catch(err => console.log(err));
        cart.coin = { code: coin.code, qty: ((cart.total / 2) / 5)};
        return cart;
    } else {
        console.log('THIS IS QTY', config.qty)
        config === undefined ?
            config = {qty: 1} : config = config;
        let newItem = undefined;
        let cartItems = cart.items.map(x => x.name);
        if (cartItems.indexOf(name) === -1) {
            newItem = new CartItem(name, price, config, img[0].path, code);
            cart.items.push(newItem);  
        } else {
            console.log('THIS IS QTY');
            console.log(config.qty);
            cart.items[cartItems.indexOf(name)].config.qty
                +=
                name !== 'Coin' ?
                    1 : config.qty;
        };

        if (name !== 'Coin') {
            cart.coin.qty += ((price / 2) / 5);
            cart.total += price;
        } else {
            cart.coin.qty += qty;
            cart.total += (price * qty);
        };

        cart = await updateSession('cart', cart)
            .then(data => { return data }).catch(err => console.log(err));
        return cart.data.cart;
    }
};

module.exports.removeFromCart = async (cart, item) => {
    // if (cart.items[cartItems.indexOf(item.name)].qty === 0) {
    //     return ''
    // }
    let cartItems = cart.items.map(x => x.name);
    let currentItem = cart.items[cartItems.indexOf(item.name)]
    currentItem.config.qty -= 1;
    cart.total -= item.price;
    if (item.name === 'Coin') {
        cart.coin.qty = Math.abs(cart.coin.qty - 1);
        if (cart.toDonate.length > ((cart.total / 2) / 5) - (item.qty * 5)) {
            cart.toDonate.pop();
        }
    } else {
        cart.coin.qty -= ((item.price / 2) / 5);
    };
    
    if (currentItem.config.qty === 0) {
        currentItem.sort = 1;
        cart.items.sort(function (a, b) {
            return a.sort - b.sort
        })
        console.log(cart.items);
        cart.items.pop();
        console.log(cart.items);
    };
    cart = await updateSession('cart', cart)
        .then(data => { return data }).catch(err => console.log(err));
    return cart.data.cart;
};

module.exports.updateCoin = async (cart, org, amt) => {
    console.log('UPDATING COIN');
    console.log(cart, org, amt);

    cart.coin.qty += amt;

    if (Math.abs(amt) % 2 === 0) {
        if (amt < 0) {
            org.coinTotal = 2;
        cart.toDonate.push(org);
    } else {
        cart.toDonate = cart.toDonate.filter(x => x.name !== org.name);
        }
    } else {
        console.log('IT IS IN FACT AN ODD NUMBER');
            cart.toDonate = cart.toDonate.map(function (element, index) {
                if (element.name === org.name) {
                    if (amt < 0) {
                        element.coinTotal += 1;  
                    } else {
                        element.coinTotal -= 1;  
                    }
                };
                return element;
            });
    }
    cart = await updateSession('cart', cart)
        .then(data => { return data }).catch(err => console.log(err));
    return cart.data.cart;
};

module.exports.updatePool = async (cart, amt) => {
    cart.pool += amt;
    cart.coin.qty -= amt;
    
    cart = await updateSession('cart', cart)
    .then(data => { return data }).catch(err => console.log(err));
return cart.data.cart;
};

// amount for each donation will have to be a static 10 or dynamic value
// if want to be dynamic then change the charityDonate component to allow for multiple coins 
//     to be put on one org 
//     then each resource in queue will have different value
//     DO this and add each purchase to customers Profile => total donated, orgs donated to,
//     level of membership, etc..


//FIX ADDING ITEMS TO CART FROM HOME PAGE AND RENDERING IN CART DROP DOWN
//poolprompt

// update cart with above function to reflect new coin amount
// after pressing coin icon to choose charity
// then program pool request and pool add


