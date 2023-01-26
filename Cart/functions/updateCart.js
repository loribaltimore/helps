let axios = require('axios');
let updateSession = require('../../functions/updateSession');
let {createCart, CartItem} = require('./createCart.js');

module.exports.addToCart = async (currentUser, cart, item, coin) => {
    if (cart === undefined) {
        cart = await createCart(currentUser, item, coin).then(data => { return data }).catch(err => console.log(err));
        cart.coin = { code: coin.code, qty: ((cart.total / 2) / 5)};
        return cart;
    } else {
        let { name, price, img, code } = item;
        let newItem = undefined;
        let cartItems = cart.items.map(x => x.name);
        if (cartItems.indexOf(name) === -1) {
            newItem = new CartItem(name, price, 1, img[0].path, code);
            cart.items.push(newItem);
        } else {
            cart.items[cartItems.indexOf(name)].qty += 1;
        };
        cart.total += price;
        newItem.name !== 'Coin' ?
            cart.coin.qty = ((cart.total / 2) / 5)
            :
            cart.coin.qty += 1;
        
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
    currentItem.qty -= 1;
    cart.total -= item.price;
    cart.coin.qty = ((cart.total / 2) / 5);
    if (currentItem.qty === 0) {
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
    if (amt < 1) {
        cart.toDonate.push(org);
    } else {
        cart.toDonate = cart.toDonate.filter(x => x !== org);
    };
    cart = await updateSession('cart', cart)
        .then(data => { return data }).catch(err => console.log(err));
    return cart.data.cart;
};

//FIX ADDING ITEMS TO CART FROM HOME PAGE AND RENDERING IN CART DROP DOWN
//poolprompt

// update cart with above function to reflect new coin amount
// after pressing coin icon to choose charity
// then program pool request and pool add


