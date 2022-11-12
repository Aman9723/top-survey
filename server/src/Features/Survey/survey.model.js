const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
	{
		surveyTitle: { type: String, requried: true },
		numberofQuestion: { type: Number, required },
		creator: { type: String, requried: true },
		questions: [
			{
				question: { type: String },
				optionType: { type: String },
				numberofOption: { type: Number },
				numberofAnswer: { type: Number },
				options: [{ type: String }],
				answer: [{ type: String }],
				points: { type: Number },
			},
		],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Survey = mongoose.model("surveys", surveySchema);

module.exports = Survey;
