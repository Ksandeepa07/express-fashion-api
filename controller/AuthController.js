// const product = require("../model/Product")
const Auth = require("../model/Auth");

const AuthController = {

    register: async function (req, res, next) {
        try {
            let {email,password,role} = req.body;
            const auth = new Auth({email,password,role});

            const savedAUth = await auth.save();

            res.status(201).json({message: "Account Created successfully!", data: savedAUth});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

}

module.exports = AuthController