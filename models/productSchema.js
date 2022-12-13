let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let model = mongoose.model;

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

let Product = model('product', productSchema);

module.exports = Product;