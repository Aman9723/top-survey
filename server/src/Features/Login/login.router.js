const express = require('express');
const Users = require('../Signup/signup.model');
const bcrypt = require('bcrypt');

const app = express.Router();

// password matching
const passwordMatch = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
};

app.post('/', async (req, res) => {
    const cred = req.body;
    try {
        const user = await Users.findOne({ email: cred.email });
        if (user && (await passwordMatch(cred.password, user.password))) {
            res.send({ token: user.id });
        } else {
            res.send('Incorrect email or password. Please try again.');
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = app;
