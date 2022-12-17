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
    cost: {
        type: Number,
        required: true
    },
    lead: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    }
});

let Product = model('product', productSchema);

productSchema.virtual('raised').get(function () {
    return (this.cost * this.sold) / 2
});

productSchema.virtual('popularity').get(async () => {
    let allProducts = await Product.find({});
    let sorted = allProducts.sort(function (a, b) {
        return a.sold - b.sold;
    }).filter(x => x.name);
    return sorted.indexOf(this.name) + 1;
})

module.exports = Product;