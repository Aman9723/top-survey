const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        code: { type: String, required: true },
        expireIn: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

const Otps = mongoose.model('otp', otpSchema);

module.exports = Otps;
