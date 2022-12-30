require('dotenv').config();
const express = require('express');
const cors = require('cors');

const questionRoute = require('./Features/Question/question.router');
const surveyRoute = require('./Features/Survey/survey.router');
const signupRoute = require('./Features/Signup/signup.router');
const loginRoute = require('./Features/Login/login.router');
const otpRoute = require('./Features/Otp/otp.router');

const connect = require('./Config/db');

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {res.send('Everything good 👍')});
app.use('/survey/question', questionRoute);
app.use('/survey', surveyRoute);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/forgot', otpRoute);

app.listen(PORT, async () => {
    connect();
    console.log(`Listening at http://localhost:${PORT}`);
});
