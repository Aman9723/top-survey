const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
	{
		surveytitle: { type: String, requried: true },
		creator: { type: String, requried: true },
		questions: {
			type: Array({
				type: mongoose.Schema.Types.ObjectId,
				ref: "questions",
				required: true,
			}),
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Survey = mongoose.model("surveys", surveySchema);

module.exports = Survey;
