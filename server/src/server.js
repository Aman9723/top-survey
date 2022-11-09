require("dotenv").config();
const express = require("express");
const cors = require("cors");
const questionRoute = require("./Features/Question/question.router");
const surveyRoute = require("./Features/Survey/survey.router");
const connect = require("./config/db");

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/survey/question", questionRoute);
app.use("/survey", surveyRoute);

app.listen(PORT, async () => {
	await connect();
	console.log(`Listening at http://localhost:${PORT}`);
});
