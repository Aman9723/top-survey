const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
	{
		question: { type: String, requried: true },
		optiontype: {
			type: String,
			requried: true,
			enum: ["string", "radio", "checkbox"],
		},
		options: { type: Array, requried: true },
		answer: { type: Array, requried: true },
		points: { type: Number },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Question = mongoose.model("questions", questionSchema);

module.exports = Question;
