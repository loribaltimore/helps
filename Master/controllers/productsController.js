let Product = require('../../models/productSchema');

module.exports.productsPost = async (req, res, next) => {
    let { name, price, cost, lead, img } = req.body;
    let imgFiles = req.files.map(function (element, index) {
        return { filename: element.filename, path: element.path }
    });

    let newProduct = await new Product({
        name,
        price,
        cost,
        lead, 
    });

    newProduct.img.push(
        ...imgFiles
    );

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

