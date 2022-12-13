const axios = require("axios");
import updateSession from '../../functions/updateSession';

class CartBuilder{
    constructor(items, total) {
        this.items = items;
        this.total = total
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
    }
};

class CartItem {
    constructor(name, price, qty, sort = 0) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.sort = sort
    };
    add() {
        this.qty += 1;
    };
    sort() {
        this.sort = 1;
    };
};


let createCart = async (item) => {
    let { name, price } = item;
    let newItem = new CartItem(name, price, 1);
    let newCart = new CartBuilder([newItem], newItem.price);
   let response = await updateSession('cart', newCart)
        .then(data => { return data }).catch(err => console.log(err));
    return response.data.cart;
}

module.exports = {createCart, CartItem, CartBuilder};
