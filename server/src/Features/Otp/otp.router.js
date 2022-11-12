const express = require('express');
const Otps = require('./otp.model');
const Users = require('../Signup/signup.model');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const app = express.Router();

// password hashing
const securePassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// sends email to user
const mailer = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        auth: {
            user: 'anonymusstranger52@gmail.com',
            pass: 'lfqxrvgapciflqik',
        },
        tls: {
            rejectUnauthorized: false,
        },
        port: 465,
        host: 'smtp.gmail.com',
    });

    const mailOptions = {
        from: 'anonymusstranger52@gmail.com',
        to: `${email}`,
        subject: 'Top Survey - code to reset password',
        html: `<b>${otp}</b> <br> <p>Valid for 5 minutes. Do not share it with anyone.</p>`,
    };

    transporter.sendMail(mailOptions, (err, success) => {
        if (err) console.log(err);
        else console.log('Email Sent');
    });
};

app.post('/sendOtp', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (user) {
            const otpCode = Math.floor(Math.random() * 10000 + 1);
            await Otps.create({
                email,
                code: otpCode,
                expireIn: new Date().getTime() + 300 * 1000,
            });
            mailer(email, otpCode);
            res.send('Enter code');
        } else {
            res.status(400).send("Email don't exist");
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.patch('/changePassword', async (req, res) => {
    const { email, code, newPassword } = req.body;
    try {
        const otp = await Otps.findOne({ email, code });
        if (otp) {
            const currentTime = new Date().getTime();
            const diff = otp.expireIn - currentTime;
            if (diff < 0) {
                res.send('Code expired');
            } else {
                await Users.findOneAndUpdate(
                    { email },
                    { password: await securePassword(newPassword) }
                );
                res.send('password changed');
            }
        } else {
            res.status(400).send('Invalid code.');
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = app;
