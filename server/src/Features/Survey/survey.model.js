const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
	surveyTitle: { type: String, requried: true },
	numberofQuestion: { type: Number, requried: true },
	creator: { type: String, requried: true },
	questions: { type: Array },

	versionKey: false,
});

const Survey = mongoose.model("surveys", surveySchema);

module.exports = Survey;
