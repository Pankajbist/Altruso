const Users = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        // Check if user already exists
        const data = await Users.findOne({ email: req.body.email });
        if (data) {
            res.status(409).json({
                msg: "Email already exists",
                success: false
            });
        } else {
            // Create a hash password of req.body.password
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
            await Users.create(req.body);
            res.status(201).json({
                msg: "You are successfully registered",
                success: true
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Internal Server Error",
            success: false
        });
    }
};

module.exports = { registerUser };
