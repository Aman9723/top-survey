const express = require("express");
const Survey = require("./survey.model");

const app = express.Router();

app.get("/", (req, res) => {
	res.send("users");
});

app.get("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let survey = await Survey.findById(id);
		if (survey) {
			res.send(survey);
		} else {
			res.status(404).send("survey not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.post("/", async (req, res) => {
	try {
		let survey = await Survey.create({ ...req.body });
		res.status(200).send(survey);
	} catch (err) {
		res.status(404).send(err.message);
	}
});

app.delete("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let survey = await Survey.findByIdAndDelete(id);
		if (survey) {
			res.send("survey delete successfully");
		} else {
			res.status(404).send("survey not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.patch("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let survey = await Survey.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ new: true }
		);
		res.send(survey);
	} catch (e) {
		res.status(404).send(e.message);
	}
});

module.exports = app;
