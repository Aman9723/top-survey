const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        terms: { type: Boolean, required: true },
        newsLetter: { type: Boolean },
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

const Users = mongoose.model('user', userSchema);

module.exports = Users;
