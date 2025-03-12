// const product = require("../model/Product")
const Product = require("../model/Product");
const Variation = require("../model/Variation");
const productController = {

    getAllProducts: async function (req, res, next) {
        console.log('dds')
        try {
            const products = await Product.find().populate("variations");
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    saveProducts: async function (req, res, next) {
        try {
            const {id, name, description, image, category, variations} = req.body;

            const product = new Product({id, name, description, image, category});

            for (const variation of variations) {
                const savedVariation = await new Variation({...variation, product: product._id}).save();
                product.variations.push(savedVariation._id);
            }

            const savedProduct = await product.save();

            res.status(201).json({message: "Product with variations saved!", product: savedProduct});
        } catch (error) {
            res.status(500).json({error: error.message});
        }

    },

    getProductById: async function (req, res, next) {
        console.log('dd')
        try {
            const {id} = req.params;

            const product = await Product.findOne({id}).populate("variations");

            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },


}

module.exports = productController