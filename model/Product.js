var mongoose = require("mongoose");

const productModel = mongoose.Schema({
    "id": {
        require: true,
        type: Number,
        unique: true,
        index: true
    },

    "name": {
        require: true,
        type: String,
    },

    "description": {
        require: true,
        type: String
    },

    "image": {
        require: true,
        type: String
    }
    ,

    "category":{
        require: true,
        type: String
    },

    variations: [{ type: mongoose.Schema.Types.ObjectId, ref: "variation" }]
})


const product = mongoose.model("product", productModel);
module.exports = product;

