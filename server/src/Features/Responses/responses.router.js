const express = require("express");
const Responses = require("./response.model");

const app = express.Router();

app.get("/", (req, res) => {
	res.send("users");
});

app.get("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let response = await Responses.findById(id);
		if (response) {
			res.send(response);
		} else {
			res.status(404).send("response not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.post("/", async (req, res) => {
	try {
		let response = await Responses.create({ ...req.body });
		res.status(200).send(response);
	} catch (err) {
		res.status(404).send(err.message);
	}
});

app.delete("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let response = await Responses.findByIdAndDelete(id);
		if (response) {
			res.send("response delete successfully");
		} else {
			res.status(404).send("response not found");
		}
	} catch (e) {
		res.status(404).send(e.message);
	}
});

app.patch("/:id", async (req, res) => {
	let id = req.params.id;
	try {
		let response = await Responses.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ new: true }
		);
		res.send(response);
	} catch (e) {
		res.status(404).send(e.message);
	}
});

module.exports = app;
