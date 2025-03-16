var mongoose = require("mongoose");

const authModel = mongoose.Schema({

        "email": {
            require: true,
            unique:true,
            type: String,
        },

        "password": {
            require: true,
            type: String
        },

        "role": {
            require: true,
            type: String
        },

    },
    {timestamps: true}
)


const product = mongoose.model("auth", authModel);
module.exports = product;

