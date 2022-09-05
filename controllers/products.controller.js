// mengimport model product dari index models
const db = require('../models/index.js');

const Product = db.Product;

exports.getProducts = async (req, res) => {
    
    const filters = req.body;
    
    try {
        
        const data = await Product.findAll(filters);
        const products = data.map(({ dataValues: product }) => {
            product.shouldRestock = 'no';
            if(product.stock < product.minStock){
                product.shouldRestock = 'yes';
            }
            if(product.stock === product.minStock){
                product.shouldRestock = 'shortly';
            }

            return product;
        });
        // console.log(data[0]({dataValues}));
        console.log(products);
        return res.status(200)
        .json({
            status: 'success',
            data: products
        });

    } catch (error) {
        console.error(error);
        return res.status(400)
        .json({
            status: 'Error',
            error: error.message
        });
    }
};

// module.exports = getProducts;