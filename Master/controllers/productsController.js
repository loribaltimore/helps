let Product = require('../../models/productSchema');
let extractor = require('../functions/extractor');

module.exports.productsPost = async (req, res, next) => {
    let { name, price, cost, lead, img , code} = req.body;
    let newProduct = await new Product({
        name,
        price,
        cost,
        lead,
        code
    });

    await extractor(req.files[0])
        .then(data => { console.log(data); newProduct.img.push(data)}).catch(err => console.log(err))
    

    await newProduct.save();

    let allProducts = await Product.find({})
        .then(data => { return data }).catch(err => console.log(err));

    return res.send(allProducts);
};

module.exports.productsGet = async (req, res, next) => {
    let allProducts = await Product.find({}).
        then(data => { return data }).catch(err => console.log(err));
    allProducts.sort(function (a, b) {
        return a.sold - b.sold
    });

    return res.send({ allProducts });
};

module.exports.productsDelete = async (req, res, next) => {
    let { id } = req.body;
    await Product.findByIdAndDelete(id);
    let allProducts = await Product.find({})
        .then(data => { return data }).catch(err => console.log(err));
    res.send(allProducts);
};

module.exports.productPut = async (req, res, next) => {
    let { name, price, cost, lead, id } = req.body;
    let newImg = req.files.map(function (element, index) {
        return { filename: element.filename, path: element.path }
    });
    await Product.findByIdAndUpdate(id, { name, price, cost, lead, img: newImg });
    let allProducts = await Product.find({});
    return res.send(allProducts);
};

///do CRUD on product
//finish admin configuration;

