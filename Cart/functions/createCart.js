const axios = require("axios");
let updateSession = require('../../functions/updateSession');
let { v4: uuidv4  } = require('uuid');

class CartBuilder{
    constructor(currentUser, items, total, coin, toDonate = [],  pool = 0) {
        this.currentUser = currentUser;
        this.items = items;
        this.total = total;
        this.coin = coin
        this.toDonate = toDonate;
        this.pool = pool;
    };
    remove() {
        this.items.sort(function (a, b) {
            return a + b;
        });
        this.items.pop();
    };
    total() {
        return this.items.reduce(function (a, b) {
            return a.price + b.price;
        })
    };
    coin() {
        return (this.items.reduce(function (a, b) {
            return a.price + b.price;
        }) / 2) / 10;
    }
};

class CartItem {
    constructor(name, price, config, img, code, sort = 0, id = uuidv4(), receiptNo = 'N/A', orderedFrom = 'N/A', ) {
        this.name = name;
        this.price = price;
        this.config = config;
        this.img = img;
        this.code = code;
        this.sort = sort;
        this.id = id;
        this.receiptNo = receiptNo;
        this.orderedFrom = orderedFrom;
    };
    add() {
        this.config.qty += 1;
    };
    sort() {
        this.sort = 1;
    };
};


let createCart = async (currentUser, item, onlyCoin) => {
    let { name, price, img, code, config } = item;
    let newItem = new CartItem(name, price, config, img[0].path, code);
    let newCart = new CartBuilder(currentUser, [newItem], newItem.price, { code: onlyCoin.code, qty: (newItem.price / 2) / 5 });
   let response = await updateSession('cart', newCart)
        .then(data => { return data }).catch(err => console.log(err));
    return response.data.cart;
}

module.exports = {createCart, CartItem, CartBuilder};
