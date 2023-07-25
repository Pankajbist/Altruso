const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: Number,
    email: {
        type: String,
        unique: true, // Add unique constraint to the email field
        required: true // Make the email field required
    },
    password: String // We'll store the hashed password here
});

// Before saving the user to the database, hash the password using bcrypt
userSchema.pre('save', async function (next) {
    const user = this;
    
    // Check if the email is modified (new user or email update)
    if (user.isModified('email')) {
        try {
            // Check if the email already exists in the database
            const existingUser = await mongoose.models.Users.findOne({ email: user.email });
            if (existingUser) {
                const err = new Error('Email already exists.');
                err.status = 409; // Conflict - email already exists
                return next(err);
            }
        } catch (err) {
            return next(err);
        }
    }

    // Check if the password is modified (new user or password update)
    if (user.isModified('password')) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        } catch (err) {
            return next(err);
        }
    }

    next();
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
