let mongoose = require('mongoose');
let { Schema, model } = mongoose;
let { donationQueueSchema } = mongoose;
let DonationQueue = mongoose.model('donationqueue', donationQueueSchema);
let { productSchema } = mongoose;
let Product = mongoose.model('product', productSchema);
// let {addToCart} = require('../../Cart/functions/updateCart');
// let updateSession = require('../../functions/updateSession');

let addToPool = async (req, res, next) => {
    console.log('ADD TO POOL');
    let { cart } = req.body;
    console.log(cart.currentUser);
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
    await officialQueue.addToPool(cart.coin.qty,
        cart.currentUser.bio.firstName + ' ' + cart.currentUser.bio.lastName, cart.currentUser._id);
    req.session.cart.coin.qty = 0;
    return res.send({cart: req.session.cart});
};

module.exports = addToPool;

