let axios = require('axios');
let updateSession = require('../../functions/updateSession');
let {createCart, CartItem} = require('./createCart.js');

module.exports.addToCart = async (cart, item, coin) => {
    if (cart === undefined) {
        cart = await createCart(item).then(data => { return data }).catch(err => console.log(err));
        let coinStr = ((cart.total / 2) / 10).toString().split('.');
        cart.coin = { code: coin.code, qty: parseFloat(coinStr[0].concat('.', coinStr[1].slice(0, 2)))};
        console.log(cart.coin);
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
        let cartStr = cart.total.toString().split('.');
        cart.total = parseFloat(cartStr[0].concat('.', cartStr[1].slice(0, 2)))
        let coinStr = ((cart.total / 2) / 10).toString().split('.');
        cart.coin.qty = parseFloat(coinStr[0].concat('.', coinStr[1].slice(0, 2)))
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



