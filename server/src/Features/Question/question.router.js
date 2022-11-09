const express = require("express");
const Question = require("./question.model");

const app = express.Router();

app.get("/", (req, res) => {
	res.send("users");
});

app.get("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let question = await Question.findById(id);
		if (question) {
			res.send(question);
		} else {
			res.status(404).send("question not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.post("/", async (req, res) => {
	try {
		let question = await Question.create({ ...req.body });
		res.status(200).send(question);
	} catch (err) {
		res.status(404).send(err.message);
	}
});

app.delete("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let question = await Question.findByIdAndDelete(id);
		if (question) {
			res.send("question delete successfully");
		} else {
			res.status(404).send("question not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.patch("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let question = await Question.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ new: true }
		);
		res.send(question);
	} catch (e) {
		res.status(404).send(e.message);
	}
});

module.exports = app;
