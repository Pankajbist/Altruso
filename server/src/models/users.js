const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: Number,
    email: String,
    password: String // We'll store the hashed password here
});

// Before saving the user to the database, hash the password using bcrypt
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
