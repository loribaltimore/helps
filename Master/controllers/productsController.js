let Product = require('../../models/productSchema');

module.exports.productsPost = async (req, res, next) => {
    let { name, price, cost, lead, img } = req.body;
    console.log(req.file);
    let newProduct = await new Product({
        name,
        price,
        cost,
        lead, 
    });
};

///finish product upload
//configure multer to add image
///do CRUD on product
//finish admin configuration;

