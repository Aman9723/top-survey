const express = require('express');
const Users = require('./signup.model');

const app = express.Router();

app.get('/email/:email', async (req, res) => {
    const { email } = req.params;
    try {
        let user = await Users.findOne({ email });
        if (user) res.send('Email already exists.');
        else res.send('unique');
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.post('/password', async (req, res) => {
    try {
        const data = req.body;
        let user = await Users.findOne({ email: data.email });
        if (user) res.send('Email already exists.');
        else {
            let newUser = await Users.create(data);
            res.send('account created');
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = app;
