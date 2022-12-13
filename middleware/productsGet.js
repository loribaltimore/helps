let Product = require('../models/productSchema');

let productsGet = async (req, res, next) => {
    let allProducts = await Product.find({});
    res.send(allProducts);
};

module.exports = productsGet